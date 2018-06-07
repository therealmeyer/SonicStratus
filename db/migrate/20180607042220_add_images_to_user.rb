class AddImagesToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :profile_img_url, :string, null: false
    add_column :users, :header_img_url, :string, null: false
  end
end
