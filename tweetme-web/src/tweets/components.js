import React, {useState} from 'react'
import {TweetsList} from './list'
import {TweetCreate} from './create'

export function TweetsConponent(props) {
    const [newTweets, setNewtweets] = useState([])
    const canTweet = props.canTweet === "false" ? false : true

    const handleNewTweet = (newTweet) => {
        let tempNewTweets = [...newTweets]
        tempNewTweets.unshift(newTweet)
        setNewtweets(tempNewTweets) 
    }
    console.log(newTweets);
    return (
        <div className={props.className}>
            {canTweet === true && <TweetCreate didTweet={handleNewTweet} className='col-12 mb-3' />}
            <TweetsList newTweets={newTweets} {...props} />
        </div>
    )
}
