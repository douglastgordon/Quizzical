class Api::CardsController < ApplicationController

  def show
    @card = Card.find(params[:id])
    render :show
  end

  def create
    @card = Card.create(card_params)
    render :show
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render :index
  end

  def update
    @card = Card.find(params[:id])
    @card.update!(card_params)
    render :show
  end

  private

  def card_params
    params.require(:card).permit(:term, :definition, :audio_url, :deck_id)
  end
end
