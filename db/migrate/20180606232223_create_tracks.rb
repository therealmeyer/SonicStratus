class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description
      t.string :genre
      t.string :album_image_url
      t.integer :year

      t.timestamps
    end
  end
end
