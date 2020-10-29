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
        {(actionTweet && hideActions !== true) && <div className="btn btn-group">
            <ActionBtn tweet={actionTweet} didPerfomeAction={handlePerfomeAction} action={{type: "like", display:"Like"}}/>
            <ActionBtn tweet={actionTweet} didPerfomeAction={handlePerfomeAction} action={{type: "unlike", display:"Unlike"}}/>
            <ActionBtn tweet={actionTweet} didPerfomeAction={handlePerfomeAction} action={{type: "retweet", display:"Retweet"}}/>
        </div>}
    </div>
}