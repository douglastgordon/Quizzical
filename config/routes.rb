Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :decks, only: [:create, :destroy, :show, :index, :update]
    resources :cards, only: [:create, :destroy, :update, :show]
    resources :languages, only: [:index]
  end

  root "static_pages#root"

end
