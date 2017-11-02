Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :startups, except: [:show] do
    collection do
      get :search
    end
  end

  namespace :api do
    namespace :v1 do
      resources :startups, only: [:index, :show, :create]
      resources :users
    end
  end

  root                            to: 'startups#index'  
  get 'auth/:provider/callback',  to: 'sessions#create'
  get 'logout',                   to: 'sessions#destroy'
  get '*path',                    to: 'startups#index'
end
