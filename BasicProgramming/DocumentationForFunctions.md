# Exercises 7 and 11: Documenting Functions

## Here are the functions that need documenting: 

### Exercise 7 
getFriendDistance(username) <br>
getNumberFriends() <br>
logout() <br>
requestFriend(username) <br>
post(statusUpdate) <br>
like(postId, likeType) <br>

### Exercise 11
safeMode(enable) <br>
getPremiumMode() <br>
setTimeout(timeout) <br>
newEvent(calendarId) <br>
getDirections(latitude, longitude, directionsCallback) <br>
createTransaction(amount) <br>


***

# Valerie's JavaScript Social Network SDK

## createTransaction(amount)
Creates a new transaction.
- Parameters
    - amount
    Type: Number
    Amount of the transaction, in the default currency
- Returns
    Type: String
    ID of the new transaction

## getDirections(latitude, longitude, directionsCallback)
Returns the directions from the current location to the destination location.
- Parameters
    - latitude
    Type: Number
    Latitude of the destination, in degrees
    - longitude
    Type: Number
    Longitude of the destination, in degrees
    - directionsCallback
    Type: Function
    Called when the directions are returned from the server. Contains a string parameter named **directions**, which has the directions for how to travel from the current location to the destination.

## getFriendDistance(username)
Provides the "degrees of separation" between users. 
_Note: Any user is some “degrees of separation” from another user. For example, if they are friends, the distance is one, and if they are friends of friends, the distance is two._
- Parameters
    - username
    Type: String
    Username of the user to get the distance from
- Returns
    Type: Number
    Number of degrees of separation between the users
    _Note: If there is no connection between the users, then it returns NaN._ 

## getNumberFriends()
Retrieves the number of friends the current user has.
- Returns
    Type: Number
    Number of friends of the current user

## getPremiumMode()
Returns whether the user has paid for premium mode. 
- Returns
    Type: Boolean
    Returns true if the user has paid and false if the user has not paid.

## like(postId, likeType)
Likes a post.
- Parameters
    - postId
    The ID number of the post
    - likeType
    Type of "like" action. Valid values: Like, Love, Empathy.
- Returns
    Type: Boolean
    Returns true if the like succeeded and false if the like fails.

## logout()
Ends the session of the current user.

## newEvent(calendarId)
Creates a new event for the specified calendar.
- Parameters
    - calendarId
    Type: Number
    The ID of the calendar
- Returns
    Type: Number
    The ID of the new event. 

## post(statusUpdate) 
Posts a status update for the user.
_Note: The status update can be up to 1000 characters long._
- Parameters
    - statusUpdate
    Text of the update
- Returns
    Type: Boolean
    Returns true if the post succeeded and false if the post fails.

## requestFriend(username)
Sends a friend request to a user.
- Parameters
    - username
    Username of the recipient of the request
- Returns
    Type: Boolean
    Returns true if the request is accepts and false if it is rejected. 

## safeMode(enable)
Enables or disables safe mode.
- Parameters
    - enable
    Type: Boolrsn
    True to enable safe mode; false to disable safe mode.

## setTimeout(timeout)
Sets the time to wait for a response before timing out.
- Parameters
    - timeout
    Type: Number
    Time to wait for a response before timing out, in milliseconds


