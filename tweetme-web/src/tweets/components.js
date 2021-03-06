import React, {useState, useEffect} from 'react'
import {TweetsList} from './list'
import {TweetCreate} from './create'
import {Tweet} from './detail'
import {apiTweetDetail} from './lookup'

export function TweetsConponent(props) {
    const [newTweets, setNewtweets] = useState([])
    const canTweet = props.canTweet === "false" ? false : true

    const handleNewTweet = (newTweet) => {
        let tempNewTweets = [...newTweets]
        tempNewTweets.unshift(newTweet)
        setNewtweets(tempNewTweets) 
    }
    return (
        <div className={props.className}>
            {canTweet === true && <TweetCreate didTweet={handleNewTweet} className='col-6 mx-auto my-3' />}
            <TweetsList newTweets={newTweets} {...props} />
        </div>
    )
}


export function TweetDetailComponent(props) {
    const {tweetId} = props
    const [didLookup, setDidLookup] = useState(false)
    const [tweet, setTweet] = useState(null)

    const handleBackendLookup = (response, status) => {
        if (status === 200) {
            setTweet(response)
        } else{
            alert("There was an error finding your tweet")
        }
    }
    useEffect(() => {
        if (didLookup === false) {
            apiTweetDetail(tweetId, handleBackendLookup)
            setDidLookup(true)
        }
    }, [tweetId, didLookup, setDidLookup])

    return tweet === null ? null : <Tweet tweet={tweet} className={props.className} />
}