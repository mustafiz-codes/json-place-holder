# json-place-holder

** Resources: **

# POSTS
  1. ** Get All Posts **
  ```
    method: GET
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
    method: GET
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
    method: POST
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
  
  
  4. ** Update Post **
   ```
    method: PUT
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
  
  
  
  3. ** Delete Post **
   ```
    method: post
    routes: /post/id
  ```
  Parameter:
  ```
  {
      "userId": ID
      "postId": ID
  },
  ```
  
  
  
