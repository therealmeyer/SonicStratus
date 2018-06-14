class ChangeColumnTracks < ActiveRecord::Migration[5.1]
  def change
    change_column :tracks, :duration, :float
  end
end
