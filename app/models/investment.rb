class Investment < ActiveRecord::Base
  belongs_to :user
  belongs_to :startup

  validates :user_id, presence: true
  validates :startup_id, presence: true
  validates :amount, presence: true
  validates :customer, presence: true
  validates :currency, presence: true
  validates :payment_category, presence: true
  validates :startupName, presence: true
  validates :sharesBought, presence: true
end
