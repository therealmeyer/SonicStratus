Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update] do 
      resources :tracksby, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:create, :update, :destroy, :index, :show] 
    resources :comments, only: [:create, :destroy]
    resources :searches, only: [:index]
  end


  root to: 'static_pages#root'
end
