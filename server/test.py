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
    content_type='application/json')
playerOne = json.loads(response.data)['player']

# register second player
response = app.post(
    "/api/game/new",
    data=json.dumps({
        "id": gameID
    }),
    content_type='application/json')
playerTwo = json.loads(response.data)['player']

# get game status
response = app.post(
    "/api/game/state",
    data=json.dumps({
        "id": gameID,
        "player": playerOne
    }),
    content_type='application/json')
currentPlayer = json.loads(response.data)['player']

# play a card
response = app.post(
    "/api/game/play",
    data=json.dumps({
        "id": gameID,
        "player": currentPlayer['id'],
        "card": currentPlayer['hand'][0]['id']
    }),
    content_type='application/json')

# pass turn to other player
response = app.post(
    "/api/game/pass",
    data=json.dumps({
        "id": gameID,
        "player": currentPlayer['id']
    }),
    content_type='application/json')

# get game status
response = app.post(
    "/api/game/state",
    data=json.dumps({
        "id": gameID,
        "player": currentPlayer['id']
    }),
    content_type='application/json')

# play a card
response = app.post(
    "/api/game/play",
    data=json.dumps({
        "id": gameID,
        "player": currentPlayer['id'],
        "card": currentPlayer['hand'][0]['id']
    }),
    content_type='application/json')

# get game status
response = app.post(
    "/api/game/state",
    data=json.dumps({
        "id": gameID,
        "player": playerOne
    }),
    content_type='application/json')
