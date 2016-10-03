{
  currentUser: {
    id: 1,
    username: "Username"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createSet: {errors: ["title can't be blank"]}
    createSetItem: {errors: ["term can't be blank", "definition can't be blank"]}
  },
  setItems: {
    1: {
      term: "Hello!",
      definition: "Bonjour",
      author_id: 1,
      set_id: 1
      tags: {
        1: {
          id: 1
          name: "German"
        }
      }
    }
  },
  sets: {
    1: {
      title: "French Greetings",
      author_id: 1,
      description: "Learn to say hello",
      sets: []
    }
  }
}
