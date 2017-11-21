class AddSharesToInvestments < ActiveRecord::Migration[5.1]
  def change
    add_column :investments, :sharesBought, :string
  end
end
