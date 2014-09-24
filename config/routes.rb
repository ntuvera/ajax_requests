Rails.application.routes.draw do
  root to: 'video#index'
  resources :video
end
