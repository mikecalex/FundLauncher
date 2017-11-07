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
    # customer = nil
    # if user.stripe_customer_id.nil?
      # create the customer
    # else
    #  customer = Customer.retrieve(user.stripe_customer_id)
    # end
    customer = Stripe::Customer.create(
    :email => params[:email],
    :source  => params[:id]
    )
    # modify your user object to store the stripe_customer_id

    #persist the amount, currency, payment type, and the charge.id
    charge = Stripe::Charge.create(
      :customer => customer.id,
      :amount => params[:amount],
      :description => "Investment ID",
      :currency => 'usd'
    )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end

end
