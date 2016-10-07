class Api::CardsController < ApplicationController

  private

  def card_params
    params.require(:card).permit(:term, :definition, :audio_url, :deck_id)
  end
end
