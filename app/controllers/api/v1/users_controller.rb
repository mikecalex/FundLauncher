class Api::V1::UsersController < ApplicationController
  def index
    render json: current_user
  end
end
