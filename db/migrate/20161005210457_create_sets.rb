class CreateSets < ActiveRecord::Migration
  def change
    create_table :sets do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.text :description
      t.integer :term_lang_id
      t.integer :def_lang_id
      t.timestamps null: false
    end
    add_index :sets, :author_id
    add_index :sets, :term_lang_id
    add_index :sets, :def_lang_id
  end
end
