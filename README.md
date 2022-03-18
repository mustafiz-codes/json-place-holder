# json-place-holder

Resources:

# Schema 
```
const postsSchema = new Schema(
  {
    userId: {
      type: Number,
      required: true,
      trim: true,
    },
    postId: {
      type: Number,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);
```
      
# typeDefs

  type Post {
    userId: ID!
    postId: ID!
    title: String!
    body: String!
    createdAt: String
    updatedAt: String
  }
  input CreatePostInput {
    userId: ID!
    title: String!
    body: String!
  }
  input UpdatePostInput {
    postId: ID!
    title: String
    body: String
  }

  #Queries
  type Query {
    getPosts(postId: ID!, page: Int, perPage: Int): [Posts!]
    getPostByUser(userId: ID!): Post!
  }

  #Mutations
  type Mutation {
    createPost(createPostInput: CreatePostInput): Post!
    updatePostById(updatePostInput: UpdatePostInput): Post!
    removePostById(postId: ID!): Boolean!
  }
