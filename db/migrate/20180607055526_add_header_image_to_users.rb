class AddHeaderImageToUsers < ActiveRecord::Migration[5.1]
  def self.up 
    add_attachment :users, :header_image
  end 

  def self.down 
    remove_attachment :users, :header_image 
  end 
end
