json.extract! card, :id, :term, :definition, :deck_id
json.audio_url asset_path(card.audio.url)
