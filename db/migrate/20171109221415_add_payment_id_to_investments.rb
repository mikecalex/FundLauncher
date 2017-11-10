class AddPaymentIdToInvestments < ActiveRecord::Migration[5.1]
  def change
    add_column :investments, :payment_id, :string
  end
end
