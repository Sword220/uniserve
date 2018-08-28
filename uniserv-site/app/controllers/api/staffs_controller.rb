class Api::StaffsController < ApplicationController
  def index
    render json: Staff.all
  end
end
