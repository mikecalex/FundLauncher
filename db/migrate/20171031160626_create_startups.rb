class CreateStartups < ActiveRecord::Migration[5.1]
  def change
    create_table :startups do |t|
      t.string :name, null: false
      t.string :category
      t.text :description, null: false
      t.integer :desired_funding, null: false
      t.integer :current_funding, null: false
      t.integer :shares_available, null: false
      t.integer :user_id
      t.string :photo_url, null: false
    end
  end
end
