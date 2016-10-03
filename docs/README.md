# Quizzical

[Heroku link]

## Minimum Viable Product

Quizzical is a web application inspired by Quizlet built using Ruby on Rails and React/Redux. Quizzical is designed primarily with language-learning flashcards in mind. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:


- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Study Sets containing set items w/ image and audio
- [ ] Tags/Categories
- [ ] Search
- [ ] Flash cards with Animation
- [ ] Google Translate API integration

The following features are stretch goals:


- [ ] Nesting folders
- [ ] Quizzes

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes/
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1


### Phase 2: Sets Model, API, and components (1 days)

**Objective:** Sets can be created, read, edited and destroyed through
the API.

- [ ] `Sets` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for sets (`SetsController`)
- [ ] JBuilder views for sets
- Set components and respective Redux loops
  - [ ] `SetsIndex`
  - [ ] `SetForm` - simplified version
- [ ] Style sets components
- [ ] Seed sets

### Phase 3: SetItems model, API and components (2 days)

**Objective** SetItems belong to sets and can be CRUDed through the API.

- [ ] `SetItems` model `
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for setitems (`SetItemsController`)
- [ ] JBuilder views for SetItems
- [ ] Adding SetItems requires a Set
- [ ] Viewing SetItems by Set
- [ ] Style SetItem components
- [ ] Seed setItems

### Phase 3: Search and My Sets (1 days)

**Objective** Allow Sets index to be filtered by user input / by current user id

- [ ] `Tags` models
- [ ] Seed database with a small amount of test data

### Phase 4: Flashcard view (1 days)

**Objective** Flashcard view of sets with animation

### Phase 5: Google translate API integration (1 days)

**Objective** Allow autofill of definitions based on target/source language

### Phase 6: Refactoring / additional styling (1 days)
