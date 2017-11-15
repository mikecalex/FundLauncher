Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :startups, except: [:show] do
    collection do
      get :search
    end
  end

  namespace :api do
    namespace :v1 do
      get '/all',                 to: 'startups#all'
      get '/tech',                to: 'startups#tech'
      get '/education',           to: 'startups#education'
      get '/politics',            to: 'startups#politics'
      get '/games',               to: 'startups#games'
      get '/social',              to: 'startups#social'
      get '/entertainment',       to: 'startups#entertainment'
      get '/finance',             to: 'startups#finance'
      get '/music',               to: 'startups#music'
      resources :users
      resources :startups, only: [:index, :show, :create]
      resources :investments, only: [:index, :show, :create]
    end
  end

  root                            to: 'startups#index'
  get 'logout',                   to: 'sessions#destroy'
  get 'auth/:provider/callback',  to: 'sessions#create'
  get '*path',                    to: 'startups#index'
end
