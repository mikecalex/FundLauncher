Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root                            to: 'startups#index'
  get 'auth/:provider/callback',  to: 'sessions#create'
  get 'logout',                   to: 'sessions#destroy'

  namespace :api do
    namespace :v1 do
      resources :startups, only: [:index, :show, :create]
      resources :users
    end
  end
end
