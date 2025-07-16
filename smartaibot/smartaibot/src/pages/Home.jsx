import React, { useContext, useState } from 'react';
import "../App.css";
import { RiImageAiLine, RiImageAddLine } from "react-icons/ri";
import { CiChat1 } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";
import { dataContext } from '../context/UserContext';
import Chat from './Chat'; // Make sure this path is correct

function Home() {
  const { startRes, setStartRes } = useContext(dataContext);

  // Local states
  const [popUP, setPopUP] = useState(false);
  const [input, setInput] = useState("");

  // Form submission handler
  async function handleSubmit(e) {
    e.preventDefault();
    setStartRes(true);
  }

  return (
    <div className='home'>
      <nav>
        <div className='logo'>Smart AI Bot</div>
      </nav>

      {!startRes ? (
        <div className='hero'>
          <span>What can I help with</span>
          <div className='cate'>
            <div className='upImg'>
              <RiImageAddLine />
              <span>Upload Images</span>
            </div>
            <div className='genImg'>
              <RiImageAiLine />
              <span>Generate Images</span>
            </div>
            <div className='chat'>
              <CiChat1 />
              <span>Let's Chat</span>
            </div>
          </div>
        </div>
      ) : (
        <Chat />
      )}

      <form className='input-box' onSubmit={handleSubmit}>
        {popUP && (
          <div className="pop-up">
            <div className="select-up">
              <RiImageAddLine />
              <span>Upload Image</span>
            </div>
          </div>
        )}

        <button id="add" type="button" onClick={() => setPopUP(prev => !prev)}>
          <FiPlus />
        </button>

        <input
          type='text'
          placeholder='Ask Something...'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <button id="submit" type="submit">
          <FaArrowUpLong />
        </button>
      </form>
    </div>
  );
}

export default Home;
