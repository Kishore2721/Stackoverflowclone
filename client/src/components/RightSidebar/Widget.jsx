import React from 'react';
import './RightSidebar.css';
import Message from "../../assets/message.svg";
import Pen from '../../assets/pen.svg';
import Stacklogo from '../../assets/stack-overflow.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
               <img src={Pen} alt='Pen' width={18} />
               <p>Observability is ley to the future of software (and yuor DevOps career)</p>
            </div>
            <div className='right-sidebar-div-2'>
              <img src={Pen} alt='Pen' width={18} />
               <p>Podcast 374: How valuable is your screen name?</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
               <img src={Message} alt='message' width={18} />
               <p>Reviews queue workflows - Final release...</p>
            </div>
            <div className='right-sidebar-div-2'>
              <img src={Message} alt='message' width={18} />
               <p>Please welcome Valued Associates:#958 - V2Blast #959 - SpencerG</p>
            </div>
            <div className='right-sidebar-div-2'>
              <img src={Stacklogo} alt='stacklogo' width={18} />
               <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
               <p>38</p>
               <p>Why was this spam flag declined, yet the question marked as spam?</p>
            </div>
            <div className='right-sidebar-div-2'>
              <p>20</p>
               <p>what is the best course of action when a user has high enough rep to ...</p>
            </div>
            <div className='right-sidebar-div-2'>
              <p>14</p>
               <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
    </div>
  )
}

export default Widget