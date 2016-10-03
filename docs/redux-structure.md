# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Set Cycles

### Set API Request Actions

* `fetchAllSets`
  0. invoked from `FilterableSetList` `didMount`/`willReceiveProps`
  0. `GET /api/sets is called.`
  0. `receiveAllSets` is set as the success callback.

* `createSet`
  0. invoked from create set button `onClick`
  0. `POST /api/sets` is called.
  0. `receiveSingleSet` is set as the callback.

* `fetchSingleSet`
  0. invoked from `FilterableSetList` `onClick`
  0. `GET /api/notebooks/:id` is called.
  0. `receiveSingleSet` is set as the success callback.

* `updateSet`
  0. invoked from `SetItemList` `onSubmit`
  0. `PATCH /api/sets/:id` is called.
  0. `receiveSingleSet` is set as the success callback.

* `destroySet`
  0. invoked from delete notebook button `onClick`
  0. `DELETE /api/sets/:id` is called.
  0. `removeNotebook` is set as the success callback.

### Set API Response Actions

* `receiveAllSets`
  0. invoked from an API callback.
  0. The `Set` reducer updates `sets` in the application's state.

* `receiveSingleSet`
  0. invoked from an API callback.
  0. The `setItems` reducer updates `setItems` in the application's state.

* `removeSet`
  0. invoked from an API callback.
  0. The `Set` reducer removes `set[id]` from the application's state.

  ## SearchSuggestion Cycles

  * `fetchSearchSuggestions`
    0. invoked from `FilterableSetList` `onChange` when there is text
    0. `GET /api/sets` is called with `text` param.
    0. `receiveSearchSuggestions` is set as the success callback.

  * `receiveSearchSuggestions`
    0. invoked from an API callback.
    0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

  * `removeSearchSuggestions`
    0. invoked from `SetsSearchBar` `onChange` when empty
    0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
