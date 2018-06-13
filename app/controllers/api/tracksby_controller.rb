class Api::TracksbyController < ApplicationController

  def index 
    @tracks = User.includes(:tracks).find(params[:user_id]).tracks
  end 

end 