class AddIndexSongs < ActiveRecord::Migration[5.1]
  def change
    add_index :tracks, :user_id
    add_index :tracks, :title
  end
end
