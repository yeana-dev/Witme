class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]
  # GET /posts
  def index
    @posts = Post.all
    render json: @posts.to_json(:include => {
      :user => {:only => [:username, :id]},
      :category => {:only => :name}
    })
  end

  # GET /posts/[:id]
  def show
    @post = Post.find(params[:id])
    render json: @post.to_json(:include => {
      :user => {:only => [:username, :id]},
      :category => {:only => :name}
    })
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current.user
    if @post.save 
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private
  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title,:content,:skills)
  end
end
