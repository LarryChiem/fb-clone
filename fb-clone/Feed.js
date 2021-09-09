import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic="https://scontent.fhio2-2.fna.fbcdn.net/v/t1.6435-1/p320x320/189668690_4521491961213242_829688004156073505_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Ys0_zRqE_1oAX9JCcvC&_nc_ht=scontent.fhio2-2.fna&oh=f4bf13367ab2b1b19867d4411d9b8a9d&oe=615BF513"
                message="Wow this works!"
                timestamp="This is a timestamp"
                username="larry.chiem.3"
                image="https://scontent.fhio2-2.fna.fbcdn.net/v/t1.6435-9/57384376_1255904307907037_825509627872411648_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=9267fe&_nc_ohc=2Y7tMRTtmywAX8INX-H&_nc_ht=scontent.fhio2-2.fna&oh=1c037c98e91d5e56e5db9f92905e1cd3&oe=615BE152"
            />
            <Post 
                profilePic="https://scontent.fhio2-2.fna.fbcdn.net/v/t1.6435-9/135116419_2855021554717849_3320632392474927514_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Xuc_ZijdpJUAX8XVOSm&_nc_ht=scontent.fhio2-2.fna&oh=865097e310186784c8fec1fbb0df7ea8&oe=615BB82B"
                message="I love my son"
                timestamp="This is a timestamp"
                username="loan.chiem.10"
            />
        </div>
    )
}

export default Feed
