json.extract! deck, :id, :title, :author_id, :description, :term_lang_id, :def_lang_id
json.author deck.author.username
json.term_language deck.term_language.name
json.definition_language deck.definition_language.name

if show_cards
  json.cards do
    deck.cards.each do |card|
      json.set! card.id do
        json.partial! 'api/cards/card', card: card
      end
    end
  end
end
