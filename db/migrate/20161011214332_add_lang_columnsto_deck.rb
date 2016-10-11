class AddLangColumnstoDeck < ActiveRecord::Migration
  def change
    add_column :decks, :term_lang_id, :integer, null: false
    add_column :decks, :def_lang_id, :integer, null: false
  end
end
