class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]
  before_action :add_post_to_comment, only: [:create, :showPostsComments]

  # GET /comments
  def index
    @comments = Comment.all
    render json: @comments.to_json(:include => {
      :user => {:only => [:username]},
      :post => {:only => [:title]}
    })
  end

  # GET /posts/[:post_id]/comments
  # This will show selected post's comments using post_id
  def showPostsComments
    @comments = Comment.where post: @post
    render json: @comments.to_json(:include => {
      :user => {:only => [:username]},
      :post => {:only => [:title]}
    })
  end

  # GET /comments/[:id]
  def show
    render json: @comment.to_json(:include => {
      :user => {:only => [:username]},
      :post => {:only => [:title]}
    })
  end

  # POST /posts/[:post_id]/comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @comment.post = @post
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PUT /comments/[:id]
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/[:id]
  def destroy
    @comment.destroy
  end

  private
    def add_post_to_comment
      @post = Post.find(params[:post_id])
    end

    def set_comment
      @comment = Comment.find(params[:id])
    end

    def comment_params
      params.require(:comment).permit(:content)
    end
end
