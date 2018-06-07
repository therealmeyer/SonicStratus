class AddProfileImageToUsers < ActiveRecord::Migration[5.1]
  def self.up 
    add_attachment :users, :profile_image
  end 

  def self.down 
    remove_attachment :users, :profile_image 
  end 
end
