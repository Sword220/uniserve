class Api::OeasController < ApplicationController
  def index
    render json: Oea.all
  end
end
