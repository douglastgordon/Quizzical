class CreateCreateScores < ActiveRecord::Migration
  def change
    create_table :scores do |t|
      t.integer :deck_id, null: false
      t.integer :user_id, null: false
      t.integer :score, null: false
      t.timestamps null: false
    end
  end
end
