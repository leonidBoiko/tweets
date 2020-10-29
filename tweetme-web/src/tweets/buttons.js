import React from 'react'
import {apiTweetAction} from './lookup'


export function ActionBtn(props) {
    const {tweet, action, didPerfomeAction} = props 
    const likes = tweet.likes ? tweet.likes : 0
    const actionDisplay = action.display ? action.display : 'Action'
    const className = props.className ? props.className : 'btn btn-primary'

    const handleActionBackendEvent = (response, status) => {
        console.log(response, status);
        if ((status === 200 || status === 201) && didPerfomeAction) {
            didPerfomeAction(response, status)
        }
    }

    const handelClick = (event) => {
        event.preventDefault()
        apiTweetAction(tweet.id, action.type, handleActionBackendEvent)
    }

    const display = action.type === 'like' ? `${likes} ${actionDisplay}` : actionDisplay
    return <button className={className} onClick={handelClick}>{display}</button> 
}