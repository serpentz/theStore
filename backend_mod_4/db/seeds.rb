# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

arr = [
  {
    name: "Sweater",
    front_image_url: "https://assets.supremenewyork.com/155360/ma/tn0eLmQ-atY.jpg",
    back_image_url: "https://assets.supremenewyork.com/155361/ma/eGMWL026W2I.jpg",
    price: 123
  },
  {
    name: "Jacket",
    front_image_url: "https://assets.supremenewyork.com/155373/ma/VDUfAKt_dL8.jpg",
    back_image_url: "https://assets.supremenewyork.com/155375/ma/DoX3Hn34E6I.jpg",
    price: 434
  },
  {
    name: "Pants",
    front_image_url: "https://assets.supremenewyork.com/157809/ma/Cc9rnbqnKks.jpg",
    back_image_url: "https://assets.supremenewyork.com/157810/ma/L4Z7Acr3EY8.jpg",
    price: 342
  },
  {
    name: "Sweater",
    front_image_url: "https://assets.supremenewyork.com/158037/ma/6srxbK2gfsY.jpg",
    back_image_url: "https://assets.supremenewyork.com/158038/ma/iPT1DRgJp80.jpg",
    price: 902
  },
  {
    name: "Pants",
    front_image_url: "https://assets.supremenewyork.com/156342/ma/dSdJ3hO9sDU.jpg",
    back_image_url: "https://assets.supremenewyork.com/156343/ma/yx3jAG6c1HY.jpg",
    price: 321
  },
  {
    name: "Hat",
    front_image_url: "https://assets.supremenewyork.com/158524/ma/_Rrr-JprI3A.jpg",
    back_image_url: "https://assets.supremenewyork.com/158525/ma/8PvQF_dBwSA.jpg",
    price: 110
  },
  {
    name: "Shirt",
    front_image_url: "https://assets.supremenewyork.com/158191/ma/tmfUmHiSDuM.jpg",
    back_image_url: "https://assets.supremenewyork.com/158193/ma/MPq8XGgrDMQ.jpg",
    price: 432
  },
  {
    name: "Skate",
    front_image_url: "https://assets.supremenewyork.com/156783/ma/xUWquwoJt-I.jpg",
    back_image_url: "https://assets.supremenewyork.com/156784/ma/PncsCKTDUHA.jpg",
    price: 999
  }
]


arr.each do |product|
  Product.create(product)
end
