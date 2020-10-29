import React, {useState} from 'react'
import {ActionBtn} from './buttons'


export function ParentTweet({parentTweet}) {
    return parentTweet ? (
        <div className="row">
            <div className="col-11 mx-auto p-3 border rounded">
                <p className="mb-0 text-muted small">Retweet</p>
                <Tweet hideActions className={' '} tweet={parentTweet} />
            </div>
        </div>
    ) : null
}


export function Tweet(props) {
    const {tweet, didRetweet, hideActions} = props
    const [actionTweet, setActionTweet ] = useState(props.tweet ? props.tweet : null) 
    const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
    
    const path = window.location.pathname
    let idRegex = /(?<tweetid>\d+)/
    const match = path.match(idRegex)
    const urlTweetId = match ?  match.groups.tweetid : -1
    const isDetail = `${tweet.id}` === `${urlTweetId}`
    
    const handleLink = (e) => {
        e.preventDefault()
        window.location.href = `/${tweet.id}`
    }

    const handlePerfomeAction = (newActionTweet, status) => {
        if (status === 200) {
            setActionTweet(newActionTweet)
        } else if (status === 201) {
            if (didRetweet) {
                didRetweet(newActionTweet)
            }
        }
    }

    return <div className={className}>
        <div>
            <p>{tweet.id} - {tweet.content}</p>
            <ParentTweet parentTweet={tweet.parent}/>
        </div>
        <div className="btn btn-group">
        {(actionTweet && hideActions !== true) && <>
            <ActionBtn tweet={actionTweet} didPerfomeAction={handlePerfomeAction} action={{type: "like", display:"Like"}}/>
            <ActionBtn tweet={actionTweet} didPerfomeAction={handlePerfomeAction} action={{type: "unlike", display:"Unlike"}}/>
            <ActionBtn tweet={actionTweet} didPerfomeAction={handlePerfomeAction} action={{type: "retweet", display:"Retweet"}}/>
        </>}
            {isDetail === true ? null : <button className="btn btn-outline-primary" onClick={handleLink}>View</button>}
        </div>
    </div>
}