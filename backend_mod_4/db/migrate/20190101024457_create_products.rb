class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.bigint :price
      t.string :front_image_url
      t.string :back_image_url


      t.timestamps
    end
  end
end
