class EditCards < ActiveRecord::Migration
  def change
    remove_column :cards, :deck_id
    add_column :cards, :deck_id, :integer, null: false
    add_index :cards, :deck_id 
  end
end
