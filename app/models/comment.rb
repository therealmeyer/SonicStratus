require 'action_view'
require 'action_view/helpers'
include ActionView::Helpers::DateHelper

class Comment < ApplicationRecord 
  validates :body, :user_id, :track_id, presence: true

  belongs_to :user 

  belongs_to :track

  def time_ago 
    time_ago_in_words(self.created_at)
  end 

end 