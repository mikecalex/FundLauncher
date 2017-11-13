class ChangePaymentTypeName < ActiveRecord::Migration[5.1]
  def change
    rename_column :investments, 'paymentType', 'payment_category'
  end
end
