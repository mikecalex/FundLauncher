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
      user_id: current_user.id,
      sec_pic: params[:sec_pic],
      briefDesc: params[:briefDesc]
    )

    if startup.save
      render json: { startup: startup }
    else
      render json: { error: startup.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def all
    render json: Startup.all
  end

  def tech
    render json: Startup.where(category: "Tech")
  end

  def politics
    render json: Startup.where(category: "Politics")
  end

  def games
    render json: Startup.where(category: "Games")
  end

  def social
    render json: Startup.where(category: "Social")
  end

  def entertainment
    render json: Startup.where(category: "Entertainment")
  end

  def finance
    render json: Startup.where(category: "Finance")
  end

  def music
    render json: Startup.where(category: "Music")
  end

  def education
    render json: Startup.where(category: "Education")
  end

end
