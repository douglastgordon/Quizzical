class Api::ScoresController < ApplicationController

  def show
    @score = Score.where(deck_id: params[:id]).order(score: :desc).first
    render :show
  end

  def create
    @score = Score.create(score_params)
    render :show
  end

  private

  def score_params
    params.require(:score).permit(:deck_id, :user_id, :score)
  end

end
