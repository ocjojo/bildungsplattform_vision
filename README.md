# Bildungsplattform Vision

## Setup

- install [docker](https://docs.docker.com/install/)
- run `docker-compose up`

## Development

- run `docker-compose exec -uwww-data vision bash` to log into the container  
  if you have node installed locally run `npm run docker` as shortcut.
- run `npm install`
- run `npm start`

### Frontend

Can be reached at http://localhost:9000

```bash
### Compiles and hot-reloads for development (started automatically with docker-compose up)
npm run frontend

### Compiles and minifies for production
npm run build

### Lints and fixes files
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Backend

Can be reached at http://localhost:3000

### Database

Can be reached at http://localhost:8000

## Roadmap

  - [ ] combine Endpoints for Frontend and Backend under one Port?
