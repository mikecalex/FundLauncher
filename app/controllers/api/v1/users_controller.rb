class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: { index: User.all, current_user: current_user }
  end

  def show
    user = User.find(params[:id])
    render json: { user: current_user}
  end
end
