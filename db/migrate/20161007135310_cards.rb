class Cards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :term, null: false
      t.string :definition, null: false
      t.string :audio_url
      t.integer :deck_id
    end
    add_index :cards, :deck_id
  end
end
