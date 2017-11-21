class AddNameToInvestments < ActiveRecord::Migration[5.1]
  def change
    add_column :investments, :startupName, :string
  end
end
