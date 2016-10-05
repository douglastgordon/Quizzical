class CreateDeck < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.text :description
      t.integer :term_lang_id
      t.integer :def_lang_id
      t.timestamps null: false
      end
      add_index :decks, :author_id
      add_index :decks, :term_lang_id
      add_index :decks, :def_lang_id
  end
end
