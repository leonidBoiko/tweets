import React, {useEffect, useState} from 'react'
import {loadTweets} from '../lookup'


export function TweetsConponent(props) {
    const textAreaRef = React.createRef()
    const [newTweets, setNewtweets] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault()
        const newValue = textAreaRef.current.value
        let tempNewTweets = [...newTweets]
        tempNewTweets.unshift({
            content: newValue,
            id: 44444,
            likes: 0
        })
        setNewtweets(tempNewTweets)
        textAreaRef.current.value = ''
    }

    return <div className={props.className}>
        <div className="col-12 mb-3">
            <form onSubmit={handleSubmit}>
                <textarea ref={textAreaRef} required={true} className="form-control">

                </textarea>
                <button type="submit" className="btn btn-primary my-3">Tweet</button>
            </form>
        </div>
        <TweetsList newTweets={newTweets}/>
    </div>
}

export function TweetsList(props) {
    const [tweetsInit, setTweetsInit] = useState([])
    const [tweets, setTweets] = useState([])
    useEffect(() => {
        let final = [...props.newTweets].concat(tweetsInit)
        if (final.length !== tweets.length) {
            setTweets(final)
        }
    }, [props.newTweets, tweets, tweetsInit])

    useEffect(() => {
      const myCallback = (response, status)=> {
        if (status === 200) {
            setTweetsInit(response)
        } else {
            alert('Was an error')
        }
      }
      loadTweets(myCallback)
    }, [])
  
    return tweets.map((item, index) => {
      return <Tweet tweet={item} className="bg-white text-dark" key={`${index}-{item.id}`}/>
    })
  }

export function ActionBtn(props) {
    const {tweet, action} = props 
    const [likes, setLikes] = useState(tweet.likes ? tweet.likes : 0)
    const [userLike, setuserLike] = useState(tweet.userLike === true ? true : false)
    const actionDisplay = action.display ? action.display : 'Action'
    const className = props.className ? props.className : 'btn btn-primary'
    const handelClick = (event) => {
        event.preventDefault()
        if (action.type === 'like') {
            if (userLike === true) {
                setLikes(likes - 1)
                setuserLike(false)
            } else {
                setLikes(likes + 1)
                setuserLike(true)
            }
        } 
    }
    const display = action.type === 'like' ? `${likes} ${actionDisplay}` : actionDisplay
    return <button className={className} onClick={handelClick}>{display}</button> 
}
  
export function Tweet(props) {
const {tweet} = props
const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
return <div className={className}>
    <p>{tweet.id} - {tweet.content}</p>
    <div className="btn btn-group">
    <ActionBtn tweet={tweet} action={{type: "like", display:"Like"}}/>
    <ActionBtn tweet={tweet} action={{type: "unlike", display:"Unlike"}}/>
    <ActionBtn tweet={tweet} action={{type: "retweet", display:"Retweet"}}/>
    </div>
</div>
}