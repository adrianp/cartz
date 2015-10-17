import json

import cartz


app = cartz.app.test_client()
gameID = "test"

# register first player
response = app.post(
    "/api/game/new",
    data=json.dumps({
        "id": gameID
    }),
    content_type='application/json',
)
playerOne = json.loads(response.data)['player']

# register second player
response = app.post(
    "/api/game/new",
    data=json.dumps({
        "id": gameID
    }),
    content_type='application/json',
)
playerTwo = json.loads(response.data)['player']

# get game status
response = app.post(
    "/api/game/state",
    data=json.dumps({
        "id": gameID,
        "player": playerOne
    }),
    content_type='application/json',
)
print json.loads(response.data)
