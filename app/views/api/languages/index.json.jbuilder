@languages.each do |deck|
  json.set! language.id do
    json.partial! 'language', language: language
  end
end
