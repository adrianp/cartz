import api

gameID = "test"

# register first player
response = api.game_new(id=gameID)[0]
playerOne = response['player']

# register second player
response = api.game_new(id=gameID)[0]
playerTwo = response['player']

print playerOne, playerTwo

# get game status
response = api.game_state(id=gameID, player=playerOne)[0]
print response
