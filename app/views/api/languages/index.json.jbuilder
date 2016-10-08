@languages.each do |language|
  json.set! language.id do
    json.partial! 'language', language: language
  end
end
