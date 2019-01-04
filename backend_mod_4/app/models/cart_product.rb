class CartProduct < ApplicationRecord
  belongs_to :cart
  belongs_to :product
  validates :product, uniqueness: {scope: :cart }
end
