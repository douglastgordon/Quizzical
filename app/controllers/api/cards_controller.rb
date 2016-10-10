class Api::CardsController < ApplicationController

  def show
    @card = Card.find(params[:id])
    render :show
  end

  def create
    @cards = JSON.parse(params["cards"])
    @real_cards = []
    @cards.map do |card|
      @real_cards << Card.create(card)
    end
    render :show
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render :show
  end

  def update
    @card = Card.find(params[:id])
    @card.update!(card_params)
    render :show
  end

  private

  def card_params
    params.require(:cards).permit(:term, :definition, :audio_url, :deck_id)
  end
end
