


import React, { useEffect,useState } from "react";
import questions from "../Helpers/QuestionBank";
import { withContext } from "../AppContext";

 function RightBar(props) {
// console.log(props.answerCount)
  const [index, setIndex] = useState(0);
  const [class1, setClass1] = useState();
  const [myQuestion, setMyQuestion] = useState([]);

 
  function myFunction(i){
      setMyQuestion(i) 
      props.parentData(i) 
}
  return (
 
    <div className="answer-box">
      <div className="answer-box-inner">
        <div className="answer-box-upper">

        <div className="roows right-answwer--box">
        <ul className="upper-list--1">
            
           <li className="padding-left">
           <div className="box green">{props.answerCount}</div>
            Answered</li>
           <li className="padding-left">
           <div className="box red">{props.notAnswers}</div>
            Not Answered</li>
           <li className="padding-left">
           <div className="box grey">{props.notVisited}</div>
            Not Visited</li>
           <li className="padding-left">
           <div className="box purple">{props.markReview}</div>
            Marked For Review</li>
           <li className="padding-left">
           <div className="box purple">{props.ansMarkReview}</div>
           Answered and Marked for Review</li>
          </ul>
        </div>
        
          
        </div>
        <h4>Choose a question</h4>

        <ul className="circle-flex">
        {

       
            questions.dataArr.map((item,i)=>
            {
              
               let cl="button";
             
            console.log(item.ansMarkByUser)
            
             if(item.ansMarkByUser == "" && item.visited )
               {
                cl="incorrect";
               } 
               if(item.ansMarkByUser!==""||item.ansMarkByUser!="")
               {
                  cl="correct";
               }
              if(item.review == true||item.ansreview == true 
    )
               {
               
                
                 
  cl="markedreview";
{/* 
  (item.ansMarkByUser=="")? cl="incorrect" : */}
                }
              
              
          
              
             
            return (
              <li><button onClick={()=>myFunction(i)} className={cl} key={i+1}>{i+1}</button></li>
            ) 
            }
            )
        }
       
        
        </ul>
      </div>
    </div>
  );
 }

export default withContext(RightBar);
