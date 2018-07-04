class Api::SearchesController < ApplicationController 

  def index 
    p params[:query]
    @results = PgSearch::Document
      .where("lower(content) Like ?", "#{params[:query]}%")
      .order('content DESC')

  end 
end 