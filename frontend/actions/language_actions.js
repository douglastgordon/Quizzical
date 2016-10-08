export const REQUEST_LANGUAGES = "REQUEST_LANGUAGES";
export const RECEIVE_LANGUAGES = "RECEIVE_LANGUAGES";

export const requestLanguages = () => ({
  type: REQUEST_LANGUAGES
});

export const receiveLanguages = languages => ({
  type: RECEIVE_LANGUAGES,
  languages
});
