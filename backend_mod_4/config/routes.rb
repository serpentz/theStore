Rails.application.routes.draw do
  resources :cart_products
  resources :carts
  resources :products
  root"products#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
