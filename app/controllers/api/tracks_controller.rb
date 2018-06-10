class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)
    # debugger;
    if @track.save
      render :show
    else 
      render json: @track.errors.full_messages, status: 422
    end 
  end

  def destroy
    @track = Track.find(params[:id])
    if @track.destroy
      render :show 
    else 
      render json: @track.errors.full_messages, status: 422
    end 
  end

  def show
    @track = Track.find(params[:id])
  end

  def update
    @track = Track.find(params[:id])
    if @track.update_attributes(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def index
    @tracks = Track.all #where(user_id: params[:user_id])
  end

  private
  def track_params
    params.require(:track).permit(:title, :user_id, :audio, :image, :description, :genre)
  end
end