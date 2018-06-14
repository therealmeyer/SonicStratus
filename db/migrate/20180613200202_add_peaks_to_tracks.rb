class AddPeaksToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :peaks, :string, array: true, default: []
  end
end
