class InvestmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :startup_id, :amount, :created_at, :updated_at, :customer, :currency, :payment_category, :payment_id, :startupName

  belongs_to :user
end
