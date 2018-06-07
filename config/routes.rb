Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {formate: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:create, :update, :destroy, :index, :show]
  end

  root to: 'static_pages#root'
end
