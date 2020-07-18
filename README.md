# ts-graphql-crud
a simple crud graphql server with Apollo server, express and Typescript 

# start app
run `npm start`  access graphql playground at [http://localhost:4000/graphql](http://localhost:4000/graphql)

# playground

### create movie
Create a mutation with option and the fields to select
```
mutation {
  createMovie(
    options: {
      title: "New Movie",
      minutes: 75
    }
  ){
    id
    title
    minutes
  }
}
```
response will be in the format 
```
{
  "data": {
    "createMovie": {
      "id": 6,
      "title": "New Movie",
      "minutes": 75
    }
  }
}
```
![create a movie with graphql](./docs/playground_create_movie.png?raw=true "create Movie")

### get movie by id
```graphql
query{
  movie(id: 1){
    id
    title
    minutes
  }
}
```
response 
```
{
  "data": {
    "movie": {
      "id": 1,
      "title": "Identity Theft",
      "minutes": 93.5
    }
  }
}
```
![get movie with graphql](./docs/playground_movie_by_id.png?raw=true "get Movie")

### get all movies
```graphql
query{
  movies{
    id
    title
    minutes
  }
}
```
response will be in the format
```
{
  "data": {
    "movies": [
      {
        "id": 1,
        "title": "Identity Theft",
        "minutes": 93.5
      },
      {
        "id": 2,
        "title": "the new movie",
        "minutes": 65
      }
    ]
  }
}   
```



### Update Movie
```
mutation {
  updateMovie(id: 2, options: {
    title: "the new movie",
    minutes: 65
  })
}
```
response will be in the format
```
{
  "data": {
    "updateMovie": true
  }
}
```

### Update Movie
```
mutation {
  deleteMovie(id: 2)
}
```
response will be in the format
```
{
  "data": {
    "deleteMovie": true
  }
}
```

# setup
I generated this project with [create-graphql-api](https://www.npmjs.com/package/create-graphql-api) by running `npx create-graphql-api <project-name>`
