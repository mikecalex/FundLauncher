class Api::V1::InvestmentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def index
    render json: Investment.all
  end

  def show
    investment = Investment.find(params[:id])
    render json: { investment: investment, charge: charge, user: current_user}
  end

  def create
    customer = Stripe::Customer.create(
    :email => params[:email],
    :source  => params[:id]
    )

    charge = Stripe::Charge.create(
      :customer => customer.id,
      :amount => params[:amount],
      :description => "Investment ID",
      :currency => 'usd'
    )

      # binding.pry

    investment = Investment.new(
      :customer => customer.id,
      payment_id: charge.id,
      amount: params[:amount],
      paymentType: params[:type],
      user_id: params[:user_id],
      startup_id: params[:startup_id],
      currency: params[:currency]
    )


    if investment.save
      render json: { investment: investment }
    else
      render json: { error: investment.errors.full_messages }, status: :unprocessable_entity
    end

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end

end
