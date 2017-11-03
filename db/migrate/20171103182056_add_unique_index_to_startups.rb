class AddUniqueIndexToStartups < ActiveRecord::Migration[5.1]
  def change
    add_index :startups, :name, unique: true
  end
end
