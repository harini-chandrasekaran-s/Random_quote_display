import React, { useState } from 'react'
import './Randomquote.css'
import reload from '../Assets/reload.png'
import send from '../Assets/send.png'

const Randomquote = () => {

    let quotes=[];

    async function loadQuotes(){
      const response=await fetch("https://type.fit/api/quotes");
      quotes= await response.json();
    }
   
  const[quote,setQuote]=useState(
    {
      text: "Difficulties increase the nearer we get to the goal",
      author: "Johann Wolfgang von Goethe",

    }
  );
  const random =()=>{
    const select=quotes[Math.floor(Math.random()*quotes.length)];
    setQuote(select);
  }
  

  loadQuotes();

  return (
   
    <div className='container'><br></br>
    <h1>QUOTE</h1>
        <div className="quote">{quote.text}</div>
          <div className='line'></div>
          <div className='bottom'></div>
          <br />
            <div className='author'>-{quote.author.split(',')[0]}</div>
            <br />
              <div className='icons'>
                <img src={reload} alt=""  onClick={()=>{random()}}/>
                <img src={send} alt="" />
              </div> 
    </div>
    
  )
}

export default Randomquote

