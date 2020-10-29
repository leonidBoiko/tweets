import {backendLookup} from '../lookup'


const baseUrl = '/tweets'

export function apiTweetCreate(newTweet, callback) { 
    backendLookup("POST", `${baseUrl}/create/`, callback, {content: newTweet})
}
  
export function apiTweetAction(tweetId, action, callback) { 
    const data = {id: tweetId, action: action}
    backendLookup("POST", `${baseUrl}/action/`, callback, data)
}

export function apiTweetList(username, callback) { 
    let endpoint = `${baseUrl}`
    if (username) {
        endpoint = `${baseUrl}/?username=${username}`
    }
    backendLookup("GET", endpoint, callback)
}

export function apiTweetDetail(tweetId, callback) { 
    backendLookup("GET", `${baseUrl}/${tweetId}/`, callback)
}