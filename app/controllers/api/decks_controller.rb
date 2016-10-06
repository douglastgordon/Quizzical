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
    render :show
  end

  def update
    @deck = Deck.find(params[:id])
    @deck.update!(deck_params)
    render :show
  end

  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy
    render :index
  end

  private

  def deck_params
    params.require(:deck).permit(:title, :description, :author, :author_id, :term_lang, :def_lang)
  end


end
