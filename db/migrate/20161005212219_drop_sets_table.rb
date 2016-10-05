class DropSetsTable < ActiveRecord::Migration
  def change
    drop_table :sets
  end
end
