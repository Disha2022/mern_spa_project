const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    workouts: [Workout]
  }

  type Workout {
    _id: ID
    exercises: [Exercise]
    day: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    workouts(username: String): [Workout]
    workout(_id: ID!): Workout
  }

  type Exercise {
    muscle: String
    name: String
    weight: String
    reps: String
    sets: String
    duration: String
  }

  input ExerciseInput {
    muscle: String
    name: String
    weight: String
    reps: String
    sets: String
    duration: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addWorkout(exercises: ExerciseInput!): Workout
  }
`;

module.exports = typeDefs;
