class StartupsController < ApplicationController

  def index
  end

  def search
    if params[:search]
      @startups = Startup.search(params[:search]).order("created_at DESC")
    else
      @startups = Startup.all.order("created_at DESC")
    end
  end

end
