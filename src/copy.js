import React, { useEffect, useState, useContext } from "react";
import questions from "../Helpers/QuestionBank";
import Result from "./Result";
import { withContext } from "../AppContext";
import Timer from "./Timer";
import { Button } from "react-bootstrap";
import Modal from "../common/Modal";
import RightBar from "./RightBar";
import AppContext from "../AppContext";

const Quiz = (props) => {
  const context = useContext(AppContext);
  console.log({ context });

  console.log(props.context.loading);
  const [myQuestion, setMyQuestion] = useState([]);
  const [modal, setModal] = useState(false);
  const [class1, setClass1] = useState();
  const [index, setIndex] = useState(0);
  const [markReview, setMarkReview] = useState();
  const [question, setQuestion] = useState(questions);
  const [result, setResult] = useState();
  const [answerCount, setAnswerCount] = useState();
  // const [class,setClass] = useState();
  const [check, setCheck] = useState(false);
  const [multipleCount, setMultipleCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [notAnswers, setNotAnswer] = useState();

  useEffect(() => {
    setQuestion(questions);
  }, []);

  console.log({ question });

  const markedAndReview = () => {
    if (
      question.dataArr[index].ansMarkByUser != 0 &&
      question.dataArr[index].ansMarkByUser != "@"
    ) {
      const questionCopy = { ...question };
      questionCopy.dataArr[index].ansreview = true;
      console.log(questionCopy);
      setQuestion(questionCopy);
    }
    if (!question.dataArr[index].review) {
      const questionCopy = { ...question };
      questionCopy.dataArr[index].review = true;
      setQuestion(questionCopy);
    }
  };

  const myFunction2 = (i) => {
    setIndex(i);

    if (!question.dataArr[i].visited) {
      const questionCopy = { ...question };
      questionCopy.dataArr[i].visited = true;
      setQuestion(questionCopy);
    }

    if (question.dataArr[i].ansMarkByUser === 0) {
      const questionCopy = { ...question };
      questionCopy.dataArr[i].ansMarkByUser = "@";
      setQuestion(questionCopy);
    }
  };

  const selectDeselctSingle = (i) => {
    console.log(i);
    let questionCopy = Object.assign({}, question);
    let k = i + "";

    if (questionCopy.dataArr[index].ansMarkByUser?.indexOf(k) > -1) {
      questionCopy.dataArr[index].ansMarkByUser = questionCopy.dataArr[
        index
      ].ansMarkByUser.replace(k, "");
    } else {
      questionCopy.dataArr[index].ansMarkByUser = "@" + i;
    }
    setQuestion(questionCopy);
    let answers =
      questionCopy.dataArr &&
      questionCopy.dataArr[index] &&
      questionCopy.dataArr.filter((item) => item.ansMarkByUser == "@" + i);
    questionCopy.dataArr[index].status = 1;
    setQuestion(questionCopy);
  };
  const selectDeselctMultiple = (i) => {
    let questionCopy = Object.assign({}, question);
    let k = i + "";
    if (questionCopy.dataArr[index].ansMarkByUser?.indexOf(k) > -1) {
      questionCopy.dataArr[index].ansMarkByUser = questionCopy.dataArr[
        index
      ].ansMarkByUser.replace(k, "");
    } else {
      questionCopy.dataArr[index].ansMarkByUser =
        questionCopy.dataArr[index].ansMarkByUser + i;
    }

    setQuestion(questionCopy);

    let ans =
      questionCopy.dataArr &&
      questionCopy.dataArr[index] &&
      questionCopy.dataArr.filter((item) => item.ansMarkByUser == "@" + i);
    questionCopy.dataArr[index].status = 1;
    setQuestion(questionCopy);
  };

  //   const Submit = () => {
  //     setModal(true);
  // question.dataArr.map((it)=>{
  //   console.log(it)
  // })

  //     const correctAnswer =
  //       question &&
  //       question.dataArr[index] &&
  //       question.dataArr.filter(
  //         (item) => item.ansMarkByUser == item.correctAnswer
  //       );
  //     console.log(correctAnswer.length);
  //     setResult(correctAnswer.length);
  //   };

  const next = () => {
    setIndex(index + 1);
    if (index === question.dataArr.length - 1) {
      setIndex(0);
    }

    if (!question.dataArr[index + 1].visited) {
      const questionCopy = { ...question };
      questionCopy.dataArr[index + 1].visited = true;
      setQuestion(questionCopy);
    }
    if (question.dataArr[index + 1].ansMarkByUser === 0) {
      const questionCopy = { ...question };
      questionCopy.dataArr[index + 1].ansMarkByUser = "@";
      setQuestion(questionCopy);
    }
  };
  // const prev = () => {
  //   setIndex(index - 1);
  //   if (index <= 0) {
  //     setIndex(question.dataArr.length - 1);
  //   }
  // };

  const clearAnswer = () => {
    let questionCopy = Object.assign({}, question);
    console.log({ questionCopy });
    if (questionCopy.dataArr && questionCopy.dataArr[index]) {
      questionCopy.dataArr[index].ansMarkByUser = "";
      setQuestion(questionCopy);
    }
  };
  console.log(question);


  return (
    <>
      <div className="quiz-header ">
        <div className="row">
          <div className="col-xl-6 xol-lg-6">
            <div className="exam_name">NEET-UG 2013</div>
          </div>
          <div className="col-xl-6 xol-lg-6 helpinstruction">
            <div className="  //  setTotalCount(answerCount + multipleCount)text-right helpinstruction-change">
              <strong className="color-white">
                <i className="question-sprite tooltip-light-blue mR5"></i>
                Instructions
              </strong>
            </div>
            <div className="text-right helpinstruction-change">
              <strong className="color-white">
                {/* {/* <i className="question-sprite question mR5"></i> */}
                Question Paper
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom showTime">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="f-13">Section</div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <span>
              <span className="">
                {/* value={setModal(true)} */}
                <strong>
                  {" "}
                  <Timer />{" "}
                </strong>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="border-bottom showTime">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="f-13">React</div>
          </div>
        </div>
      </div>

      <div className="border-bottom showTime">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="f-13">Question type : Single best Response</div>
          </div>
        </div>
      </div>

      <div className="border-bottom showTime">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="f-13">Question {index + 1}</div>
          </div>
        </div>
      </div>

      <section className="question">
        <div className="disp-1">
          <div>
            <div className="question-box">
              <ul className="">
                <li className="">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        question &&
                        question.dataArr &&
                        question.dataArr[index] &&
                        question.dataArr[index]?.quesText,
                    }}
                  />
                </li>
              </ul>
            </div>

            {question.dataArr && question.dataArr.length
              ? question.dataArr[index]?.optionsArr?.map((item, i) => {
                  // console.log(question?.dataArr[index]?.ansMarkByUser);

                  return (
                    <ul className="" key={i}>
                      <li className="answer_box margin_bottom incorrect">
                        <input
                          type="checkbox"
                          name="question"
                          // id={i}
                          className="checkBox"
                          //  onChange={question.dataArr[index].isMultipleOptions?()=>setMultipleAnswer():(e) => setAnswer(e, i + 1)}
                          onChange={
                            question.dataArr[index].isMultipleOptions
                              ? selectDeselctMultiple.bind(null, i)
                              : selectDeselctSingle.bind(null, i)
                          }
                          checked={
                            question &&
                            question.dataArr &&
                            question.dataArr[index] &&
                            // question?.dataArr[index]?.ansMarkByUser === i + 1
                            question?.dataArr[index]?.ansMarkByUser
                              ?.toString()
                              .indexOf(i + "") > -1
                              ? true
                              : false
                          }
                        />
                        <div dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    </ul>
                  );
                })
              : null}
          </div>
          <div>
            <RightBar
              parentData={myFunction2}
              notAnswers={
                question.dataArr.filter((item) => item.ansMarkByUser === "@")
                  .length
              }
              notVisited={
                question.dataArr.length -
                question.dataArr.filter((item) => item.visited).length
              }
              answerCount={
                question.dataArr.filter((item) => item.status).length
              }
              markReview={
                question.dataArr.filter((item) => item.ansreview).length
              }
              ansMarkReview={
                question.dataArr.filter((item) => item.review).length
              }
            />
          </div>
        </div>
      </section>

      <div className="border-bottom padding-btn">
        <div className="margin-ryt">
          <div>
            <Button
              variant="primary"
              type="button"
              className="btn"
              onClick={() => next()}
            >
              Save and next
            </Button>
          </div>
          <div>
            <Button
              variant="primary"
              type="button"
              className="btn"
              onClick={() => clearAnswer()}
            >
              Clear Response
            </Button>
          </div>
          <div>
            {/* <Button
              variant="primary"
              type="button"
              className="btn"
              onClick={() => prev()}
            >
              prev
            </Button> */}
          </div>
          <div>
            <Button
              variant="primary"
              type="button"
              className="btn"
              onClick={() => markedAndReview()}
            >
              Marked ANd Review
            </Button>
          </div>
          {/* <div>
            <Button
              variant="primary"
              className="btn"
              type="button"
              value={result}
              onClick={() => Submit()}
            >
              Submit
               <a  href="./Result">
          Result
        </a> 
            </Button>
          </div> */}
        </div>
      </div>

      {modal && (
        <Modal>
          <div className="popup_bg">
            <div
              onClick={() => {
                setModal(false);
              }}
              className="closebtn"
            ></div>
            <div></div>
            <div>
              <h2>Total Question</h2>
              <h2>20</h2>
            </div>
            <div>
              <h2>Correct Answer</h2>
              <h2>{result}</h2>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
// ; <a href="./Result"></a>
// export default with;
export default withContext(Quiz);



// import React, { useEffect, useState } from "react";

// import questions from "../Helpers/QuestionBank";
// import { withContext } from "../AppContext";
// var classNames = require("classnames");

// function RightBar(props) {
//   // console.log(props.answerCount)
//   const [index, setIndex] = useState(0);
//   const [class1, setClass1] = useState();
//   const [myQuestion, setMyQuestion] = useState([]);

//   function myFunction(i) {
//     setMyQuestion(i);
//     props.parentData(i);
//   }
//   let className = "button";

//   return (
//     <div className="answer-box">
//       <div className="answer-box-inner">
//         <div className="answer-box-upper">
//           <div className="roows">
//             <ul className="upper-list--1">
//               <li className="padding-left">
//                 <div className="box green">{props.answerCount}</div>
//                 Answered
//               </li>
//               <li className="padding-left">
//                 <div className="box red">{props.notAnswers}</div>
//                 Not Answered
//               </li>
//               <li className="padding-left">
//                 <div className="box grey">{props.notVisited}</div>
//                 Not Visited
//               </li>
//               <li className="padding-left">
//                 <div className="box purple">{props.markReview}</div>
//                 Marked For Review
//               </li>
//               <li className="padding-left">
//                 <div className="box purple">{props.ansMarkReview}</div>
//                 Answered and Marked for Review
//               </li>
//             </ul>
//           </div>
//         </div>
//         <h4>Choose a question</h4>

//         <ul className="circle-flex">
//           {questions.dataArr.map((item, i) => {
//              if (
//              item.ansreview == true &&   item.ansMarkByUser != ""
//             ) {
//               btnClass = classNames({
//                 button: false,
//                 incorrect: false,
//                 markedreview: true,
//                 correct: false,
//               });
//             }
            
//            else if (
//               item.ansMarkByUser == ""|| item.ansMarkByUser == "" && item.noAnswer == "#"  || item.ansMarkByUser == ""&&item.ansreview==true
//             ) {
//               btnClass = classNames({
//                 button: false,
//                 incorrect: true,
//                 markedreview: false,
//                 correct: false,
//               });
//             }
//             else if (item.ansMarkByUser && item.ansMarkByUser != "") {
//               btnClass = classNames({
//                 button: false,
//                 incorrect: false,
//                 markedreview: false,
//                 correct: true,
//               });
//             }
          
            
           
            
//           else  if(item.ansMarkByUser != "" && item.noAnswer != "#" && item.visited==true)
//             {
//               var btnClass = classNames({
              
//               button: true,
//               incorrect: false,
//               markedreview: false,
//               correct: false,
//             });
//             }
            
        
//              else if (
//              item.ansreview == true &&   item.ansMarkByUser != ""
//             ) {
//               btnClass = classNames({
//                 button: false,
//                 incorrect: false,
//                 markedreview: true,
//                 correct: false,
//               });
//             }
           
         
        

//             return (
//               <li>
//                 <button onClick={() => myFunction(i)} className={btnClass}>
//                   {i + 1}
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default withContext(RightBar);
