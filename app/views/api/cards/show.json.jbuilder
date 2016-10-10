

if @real_cards
  @real_cards.each do |card|
    json.set! card.id do
      json.partial! "api/cards/card", card: card
    end
  end
else
  json.partial! "api/cards/card", card: @card
end
