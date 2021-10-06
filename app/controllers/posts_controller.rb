class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]
  before_action :add_category_to_post, only: [:create]
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

  # POST /posts/[:category]
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    @post.category = @category
    if @post.save 
      render json: @post.to_json(:include => {
      :user => {:only => [:username, :id]},
      :category => {:only => :name}
    }), status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PUT /posts/[:id]
  def update
    if @post.update(post_params)
      render json: @post.to_json(:include => {
      :user => {:only => [:username, :id]},
      :category => {:only => :name}
    }), status: :ok
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
  end
  
  private

  def add_category_to_post
    @category = Category.find_by name: (params[:category])
  end

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title,:content,:skills,:looking_for)
  end
end
