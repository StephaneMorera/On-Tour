# On Tour

On Tour is a web application to help users find upcoming concerts and music festivals. The user can track any show they plan to attend and share with their friends.

## API Reference

Discovery API

#### Get all items

```http
  GET /events
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get all items

```http
  GET /profile
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Post item

```http
  POST /profile
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Delete item

```http
  DELETE /profile/:id
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `id`      | `string` | **Required**. Your API key, id |

## Tech Stack

**Client:** React, React-Router-Dom, Axios, Sass

**Server:** Node, Express, CORS, DotEnv, Axios

## Features

- Search events
- Follow events
- Unfollow events
- responsive

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Lessons Learned

While developing my app, I learned that ux design is not an easy task. Throughout this course, I was given a mockup and told to replicate it. Coming up with my own design was a challeniging task. I also faced challenges connecting my client side with the server. When coming up with my own ideas, it was hard to implement what i was taught into action.

## Screenshots

![App Screenshot](src/assets/images/screenshot1)
(src/assets/images/screenshot2)
(src/assets/images/screenshot3)
(src/assets/images/screenshot4)
