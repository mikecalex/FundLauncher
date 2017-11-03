class CreateInvestments < ActiveRecord::Migration[5.1]
  def change
    create_table :investments do |t|
      t.integer :user_id, null: false
      t.integer :startup_id, null: false
      t.integer :amount, null: false

      t.timestamps
    end
  end
end
