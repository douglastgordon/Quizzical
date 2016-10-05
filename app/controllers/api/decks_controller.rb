class Api::DecksController < ApplicationController

  def create
    @deck = Deck.create(deck_params)
    render :show
  end

  def index
    @decks = Deck.all
    render :index
  end

  def show
    @deck = Deck.find(params[:id])
  end

  def update
  end

  def destroy
  end

  private

  def deck_params
    params.require(:deck).permit(:title, :description, :author, :term_lang, :def_lang)
  end


end
