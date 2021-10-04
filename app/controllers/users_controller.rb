class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users/[:id]
  def show
    render json: @user.attributes.except('password_digest')
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      @token = encode({ id: @user.id })
      render json: {
        user: @user.attributes.except('password_digest'),
        token: @token
      }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PUT /users/[:id]
  def update
    if @user.update(user_params)
        render json: {
        user: @user.attributes.except('password_digest'),
        token: @token
      }
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/[:id]
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
