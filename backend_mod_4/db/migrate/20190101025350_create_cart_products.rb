class CreateCartProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_products do |t|
      t.references :cart
      t.references :product
      t.string :size
      t.bigint :quantity

      t.timestamps
    end
  end
end
