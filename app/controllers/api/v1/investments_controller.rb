class Api::V1::InvestmentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Investment.all
  end

  def show
    investment = Investment.find(params[:id])
    render json: { investment: investment, user: current_user}
  end

  def create
    token = params[:token]
    if token
      begin
        customer = Stripe::Customer.create(
        :email => token[:email],
        :source  => token[:id]
        )

        charge = Stripe::Charge.create(
          :customer => customer.id,
          :amount => token[:amount],
          :description => "Investment ID",
          :currency => 'usd'
        )
      rescue Stripe::CardError => e
        flash[:error] = e.message
        redirect_to new_charge_path
        return
      end

      investment = Investment.new(
        customer: customer.id,
        payment_id: charge.id,
        amount: token[:amount],
        payment_category: token[:type],
        user_id: current_user.id,
        startup_id: params[:startup_id],
        currency: token[:currency],
        startupName: params[:startupName]
      )

      if investment.save
        render json: { investment: investment }
      else
        render json: { error: investment.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

end
