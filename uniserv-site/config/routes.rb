Rails.application.routes.draw do
  namespace :api do
    resources :staffs, only: [:index]
    resources :weas, only: [:index]
    resources :oeas, only: [:index]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
