class DropImageUrlsUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :profile_img_url
    remove_column :users, :header_img_url
  end
end
