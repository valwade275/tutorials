# Exercise 7: Documenting Functions

## Here are the functions that need documenting: 
getFriendDistance(username)
getNumberFriends()
logout()
requestFriend(username)
post(statusUpdate)
like(postId, likeType)


***

# Valerie's JavaScript Social Network SDK

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

## logout()
Ends the session of the current user.

## requestFriend(username)
Sends a friend request to a user.
- Parameters
    - username
    Username of the recipient of the request
- Returns
    Type: Boolean
    Returns true if the request is accepts and false if it is rejected. 

## post(statusUpdate) 
Posts a status update for the user.
_Note: The status update can be up to 1000 characters long._
- Parameters
    - statusUpdate
    Text of the update
- Returns
    Type: Boolean
    Returns true if the post succeeded and false if the post fails. 

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
