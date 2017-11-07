class Investment < ActiveRecord::Base
  belongs_to :user
  belongs_to :startup

  validates :user_id, presence: true
  validates :startup_id, presence: true
  validates :amount, presence: true
  validates :created_at, presence: true
  validates :updated_at, presence: true
  validates :customer, presence: true
  validates :currency, presence: true
  validates :type, presence: true
end
