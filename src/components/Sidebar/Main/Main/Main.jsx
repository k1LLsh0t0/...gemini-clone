// eslint-disable-next-line no-unused-vars
import React, { useContext,useState } from 'react'
import './Main.css'
import { assets } from '../../../../assets/assets'
const Main = () => {
  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello,Avinash</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Sbriefly summarize this concept:Urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activites for our work retreat </p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="searchbox">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter your prompts here" />
            <div>
              <img src={assets.gallery_icon} alt=""/>
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info,including about people,so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main