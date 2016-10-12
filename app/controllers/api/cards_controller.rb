class Api::CardsController < ApplicationController

  def show
    @card = Card.find(params[:id])
    render :show
  end

  def create
    @real_cards = []
    @cards = card_params[:cards]

    @cards.keys.each do |key|
      @real_cards << Card.create(@cards[key])
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
    params.permit(cards: [:term, :definition, :audio, :deck_id])
  end
end
