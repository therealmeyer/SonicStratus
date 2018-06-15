class EditDurationColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :tracks, :duration, :string
  end
end
