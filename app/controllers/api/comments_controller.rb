class Api::CommentsController < ApplicationController 

  def create 
    @comment = Comment.new(comment_params)
    @comment.save 
    @track = @comment.track
    render "api/tracks/show"
  end 

  def destroy 
    @comment = Comment.find(params[:id])
    @track = @comment.track
    @comment.destroy 
    render "api/tracks/show"
  end 

  def comment_params 
    params.require(:comment).permit(:body, :user_id, :track_id)
  end 
end 

