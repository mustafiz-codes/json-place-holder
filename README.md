# json-place-holder

** Resources: **

# POSTS
  1. ** Get All Posts **
  ```
    method: get
    routes: /posts
  ```
  Response:
  ```
  [
      {
          "userId": ID
          "postId": ID
          "title": String
          "body": String
      },
      {
          "userId": ID
          "postId": ID
          "title": String
          "body": String
      },
  ]
  ```
  
  2. ** Get Single Post **
  ```
    method: get
    routes: /post/id
  ```
  Response:
  ```
  {
      "userId": ID
      "postId": ID
      "title": String
      "body": String
  },
  ```
  
  3. ** Create Post **
   ```
    method: post
    routes: /post/id
  ```
  Parameter:
  ```
  {
      "userId": ID
      "postId": ID
      "title": String
      "body": String
  },
  ```
  
  
  
  
