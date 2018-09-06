class Api::WeasController < ApplicationController
  def index
    render json: Wea.all
  end
end
