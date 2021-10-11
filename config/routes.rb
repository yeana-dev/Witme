Rails.application.routes.draw do
  resources :users
  resources :categories

  resources :comments, except: :create
  get '/posts/:post_id/comments', to: 'comments#showPostsComments'
  get '/users/:user_id/comments', to: 'comments#showUsersComments'
  post '/posts/:post_id/comments', to: 'comments#create'

  resources :posts, except: :create
  post '/posts/:category', to: 'posts#create'
  get '/users/:user_id/posts', to: 'posts#showUsersPosts'

  post 'auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
