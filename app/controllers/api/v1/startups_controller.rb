class Api::V1::StartupsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Startup.all
  end

  def show
    startup = Startup.find(params[:id])
    render json: { startup: startup, user: current_user}
  end

  def create
    startup = Startup.new(
      name: params[:name],
      category: params[:category],
      description: params[:description],
      desired_funding: params[:desired_funding],
      current_funding: params[:current_funding],
      shares_available: params[:shares_available],
      user_id: params[:user_id],
      photo_url: params[:photo_url],
      start_date_date: params[:start_date_date],
      end_date_date: params[:end_date_date],
      user_id: current_user.id
    )

    if startup.save
      render json: { startup: startup }
    else
      render json: { error: startup.errors.full_messages }, status: :unprocessable_entity
    end
  end

end
