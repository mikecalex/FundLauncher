class AddColumnsToInvestments < ActiveRecord::Migration[5.1]
  def change
    add_column :investments, :customer, :string
    add_column :investments, :currency, :string
    add_column :investments, :type, :string
  end
end
