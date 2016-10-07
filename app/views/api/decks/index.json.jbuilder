if @decks
  @decks.each do |deck|
    json.set! deck.id do
      json.partial! 'deck', deck: deck, show_cards: false
    end
  end
end
