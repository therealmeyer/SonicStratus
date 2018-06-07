class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)
    @track.save
    render :show
  end

  def destroy
    track = Track.find(params[:id])
    track.destroy
  end

  def show
    @track = Track.find(params[:id])
  end

  def update
  end

  def index
    @tracks = Track.all #where(user_id: params[:user_id])
  end

  private
  def track_params
    params.require(:track).permit(:title, :user_id, :audio, :image, :description, :genre)
  end
end