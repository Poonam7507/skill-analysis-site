import React from 'react'
import {Center, Newdiv } from './Center'
import Left from './Left'
import Right from './Right';

import { useState } from 'react'

import '../CSS/Player.css'

export default function PlayerPage() {
   const [score, setScore] = useState("7");
   const [rank, setRank] = useState("7");
   const [percentile, setPercentile] = useState("7");
   const [show, setShow] = useState(false);
   const [opacity, setOpacity] = useState(1);
   const [opacity2, setOpacity2] = useState(0);
   const change=(e)=>{
  setScore(e.target.value);
  
   }
   const change2=(e)=>{
  
  setPercentile(e.target.value);
 
   }
   const change3=(e)=>{
 
  setRank(e.target.value);
   }

   const display=()=>{
    // setShow(!show);
    setOpacity(0.3);
    // setOpacity2(0);
    setShow(true);
    console.log("higefsg");
   }
   const hide=()=>{
    setOpacity(1);
    // setOpacity2(0);
    setShow(false);
   }
  return (
    <>
    <div className='box' style={{opacity:opacity}}>
    <div>
        <Left/>
    </div>
    <div>
        <Center
       display={display}
       score={score}
       percentile={percentile}
       rank={rank}
    //    opacity2={opacity2}
        />
    </div>
    <div>
        <Right score={score} 
            
        />
        
    </div>


</div>
<div>
    <Newdiv 
        hide={hide} 
        opacity2={opacity2}
        change={change}
        change2={change2}
        change3={change3}
        score={score}
        display={display}
        show={show}
        rank={rank}
        percentile={percentile}

    />
</div>
{/* <div className='update_score' style={{opacity:opacity2}}>
<div>Update your rank<input
   
/></div>
<div>Update your percentile<input/></div>
<div>Update your current score (out of 15)<input
     onChange={change}
    value={score}
/></div>

<div className='btn'>
    <button onClick={hide}>Cancel</button>
    <button onClick={hide} >Save</button>
</div>

</div> */}




    </>
  )
}
