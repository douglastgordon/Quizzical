# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Sets

- `GET /api/sets`
  - filtered by search query which searches by setname & tag OR filtered by own sets
-  `POST /api/sets`
- `GET /api/sets/:id`
- `PATCH /api/sets/:id`
- `DELETE /api/sets/:id`

### Set Items
- A set's items will be included in the set show template
- `GET /api/seitems/:id`
- `POST /api/setitems`
- `PATCH /api/setitems/:id`
- `DELETE /api/setitems/:id`

### Tags
- A note's tags will be included in the note show template
