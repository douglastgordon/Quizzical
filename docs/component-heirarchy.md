## Component Hierarchy

**Root**
 - AuthFormContainer
 - HomeContainer
 - CreateSetContainer
 - ViewSetContainer

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Sidebar
 - Navbar
  - Search
 - FilterableSetList

**FilterableSetList**
 - Search
 - SetList (search results)
  - Set

**CreateSetContainer**
 - SetItemList
 - SetItemForm

**SetContainer**
 - SetItemList

**SetItemList**
  - SetItem

**FlashcardContainer**
 - Flashcard

 ## Routes

 |Path   | Component   |
 |-------|-------------|
 | "/sign-up" | "AuthFormContainer" |
 | "/sign-in" | "AuthFormContainer" |
 | "/home" | "HomeContainer" |
 | "/sets/new" | "CreateSetContainer" |
 | "/sets/:setId" | "SetContainer" |
 | "/sets/:setId/flashcards" | "FlashcardContainer" |
