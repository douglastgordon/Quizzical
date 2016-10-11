class AddNotNullConstraintLanguageIdsforDecks < ActiveRecord::Migration
  def change
    remove_column :decks, :term_lang_id
    remove_column :decks, :def_lang_id
  
  end
end
