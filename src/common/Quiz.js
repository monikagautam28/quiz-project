import React, { useEffect, useState, useContext } from "react";
import questions from "../Helpers/QuestionBank";
import Result from "./Result";
import { withContext } from "../AppContext";
import Timer from "./Timer";
import { Button } from "react-bootstrap";
import Modal from "../common/Modal";
import RightBar from "./RightBar";
import AppContext from "../AppContext";

// let arrays = ["#", "#", "#", "#"];
// let c = [];


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

  const [check, setCheck] = useState(false);

  const [notAnswers, setNotAnswer] = useState();
  const [buttonTf, setButtonTf] = useState();
  const [cl, setCl] = useState();
  const [res,setRes] = useState("")

if(question.dataArr.filter == 8)
{
  question.dataArr[index].ansMarkByUser=res;
}


  useEffect(() => {
    setQuestion(questions);
  }, []);

  console.log({ question });

  const markedAndReview = () => {
    if (question.dataArr[index].ansMarkByUser != "") {
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

  const selectDeselctMultiple = (i) => {
    console.log(i);
    let questionCopy = Object.assign({}, question);
    let k = i + "";

    if (questionCopy.dataArr[index].ansMarkByUser.indexOf(k) > -1) {
      if (
        questionCopy.dataArr[index].ansMarkByUser.indexOf(k) ===
        questionCopy.dataArr[index].ansMarkByUser.length - 1
      ) {
        questionCopy.dataArr[index].ansMarkByUser = questionCopy.dataArr[
          index
        ].ansMarkByUser.replace("," + k, "");
      } else {
        questionCopy.dataArr[index].ansMarkByUser = questionCopy.dataArr[
          index
        ].ansMarkByUser.replace(k + ",", "");
      }
    } else {
      if (questionCopy.dataArr[index].ansMarkByUser.length - 1 == 0) {
        questionCopy.dataArr[index].ansMarkByUser =
          questionCopy.dataArr[index].ansMarkByUser + i;
      } else {
        questionCopy.dataArr[index].ansMarkByUser =
          questionCopy.dataArr[index].ansMarkByUser + "," + i;
      }
    }
    console.log(questionCopy.dataArr[index].ansMarkByUser);

    if (question.dataArr[index].ansMarkByUser != "") {
      question.dataArr[index].status = 1;
      question.dataArr[index].review = false;
      question.dataArr[index].ansreview = false;
      questionCopy.dataArr[index].noAnswer = "";
      setQuestion(question);
    }
    if (question.dataArr[index].ansMarkByUser == "") {
      question.dataArr[index].status = 0;
      question.dataArr[index].review = false;
      question.dataArr[index].ansreview = false;
      questionCopy.dataArr[index].noAnswer = "#";
      setQuestion(question);
    }
    setQuestion(questionCopy);
  };

  const selectDeselctSingle = (i) => {
    console.log(i);
    let questionCopy = Object.assign({}, question);
    let k = i + "";

    if (questionCopy.dataArr[index].ansMarkByUser.indexOf(k) > -1) {
      questionCopy.dataArr[index].ansMarkByUser = questionCopy.dataArr[
        index
      ].ansMarkByUser.replace(k, "");
    } else {
      questionCopy.dataArr[index].ansMarkByUser = "" + i;
    }

    if (question.dataArr[index].ansMarkByUser != "") {
      question.dataArr[index].status = 1;
      question.dataArr[index].review = false;
      question.dataArr[index].ansreview = false;
      questionCopy.dataArr[index].noAnswer = "";
      setQuestion(question);
    }
    if (question.dataArr[index].ansMarkByUser == "") {
      question.dataArr[index].status = 0;
      question.dataArr[index].review = false;
      question.dataArr[index].ansreview = false;
      questionCopy.dataArr[index].noAnswer = "#";

      setQuestion(question);
    }

    setQuestion(questionCopy);
  };

  const myFunction2 = (i) => {
    setIndex(i);

    if (!question.dataArr[i].visited) {
      setClass1("grey");
      const questionCopy = { ...question };
      questionCopy.dataArr[i].visited = true;
      setQuestion(questionCopy);
    }

    if (!question.dataArr[i].ansMarkByUser) {
      const questionCopy = { ...question };
      questionCopy.dataArr[i].noAnswer = "#";
      setQuestion(questionCopy);
    } else {
      const questionCopy = { ...question };
      questionCopy.dataArr[i].noAnswer = "";
      setQuestion(questionCopy);
    }
  };

  // const Submit = () => {
  //   setModal(true);

  //   console.log(
  //     question.dataArr.filter(
  //       (item) => item.ansMarkByUser == item.correctAnswer
  //     )
  //   );
  //   const correctAnswer =
  //     question.dataArr &&
  //     question.dataArr[index] &&
  //     question.dataArr.filter(
  //       (item) => item.ansMarkByUser === item.correctAnswer
  //     );
  //   console.log(correctAnswer.length);
  //   setResult(correctAnswer.length);
  // };

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
    if (question.dataArr[index + 1].ansMarkByUser == "") {
      const questionCopy = { ...question };
      questionCopy.dataArr[index + 1].noAnswer = "#";
      setQuestion(questionCopy);
    }
  };

  const clearAnswer = () => {
    let questionCopy = Object.assign({}, question);
    console.log({ questionCopy });
    if (questionCopy.dataArr && questionCopy.dataArr[index]) {
      questionCopy.dataArr[index].ansMarkByUser = "";
      question.dataArr[index].review = false;
      question.dataArr[index].noAnswer = "#";
      question.dataArr[index].status = 0;
      question.dataArr[index].ansreview = false;
      setQuestion(questionCopy);
    }
   
  };

  const truefalse = (value, ind) => {
    let questionCopy = Object.assign({}, question);

    console.log(questionCopy.dataArr[index].optionsArr.length);
  
   let  arr = Array(questionCopy.dataArr[index].optionsArr.length).fill("#");
   
  
   
    console.log(arr);
    let ansByUser = questionCopy.dataArr[index].ansMarkByUser;
    let splitArr = ansByUser.split(",");
    if (splitArr.length != arr.length) {
      splitArr = arr;
    }

    splitArr[ind] = value ? "t" : "f";
    questionCopy.dataArr[index].ansMarkByUser = splitArr.join(",");

    if (question.dataArr[index].ansMarkByUser != "#") {
      question.dataArr[index].status = 1;

      setQuestion(question);
    }

    setQuestion(questionCopy);
  };

  const matchQuestion = (value, ind) => {
    const val = value + 1;
    const c = String.fromCharCode(97 + value);
    const finalVal = val + c;
    let questionCopy = Object.assign({}, question);
    const arr = Array(questionCopy.dataArr[index].noOfComponents).fill("#");
    let ansByUser = questionCopy.dataArr[index].ansMarkByUser;
    let splitArr = ansByUser.split(",");

    if (splitArr.length != arr.length) {
      splitArr = arr;
    }

    // remove existing answer val + c;
    const indexOfOtherPlace = splitArr.indexOf(finalVal);

    if (splitArr[ind] == finalVal) {
      splitArr[ind] = "#";
    } else if (indexOfOtherPlace > -1) {
      // splitArr[indexOfOtherPlace] = "#";
      splitArr[ind] = ind + 1 + c;
    } else {
      splitArr[ind] = ind + 1 + c;
    }

    questionCopy.dataArr[index].ansMarkByUser = splitArr.join(",");

    if (question.dataArr[index].ansMarkByUser != "#") {
      question.dataArr[index].status = 1;
      setQuestion(question);
    }
    setQuestion(questionCopy);
  };

  const btnTheme = (items, questionNo, countData) => {
    let questionCopy = Object.assign({}, question);
    const arr = Array(4).fill("#");
    console.log(arr)
    let ansByUser = questionCopy.dataArr[index].ansMarkByUser;
    let splitArr = ansByUser.split(",");
    if (splitArr.length != arr.length) {
      splitArr = arr;
    }
    
    splitArr[questionNo] = items+1
    // console.log(questionNo, items);
    // arrays[questionNo] = items + 1;
    // console.log(arrays);
    // let newarr= arrays.split(",");
    // console.log(newarr);
    questionCopy.dataArr[index].ansMarkByUser =splitArr.join(",");

    if (question.dataArr[index].ansMarkByUser != "#") {
      question.dataArr[index].status = 1;
      setQuestion(question);
    }

    setQuestion(questionCopy);
  };
  const pusher = (i) =>{
    let questionCopy = Object.assign({}, question);
 

  let copyC=res;
  copyC = copyC + i;
 setRes(copyC)
 

   console.log(res)

 
  if (question.dataArr[index].ansMarkByUser != "#") {
    question.dataArr[index].status = 1;
    setQuestion(question);
  }
  questionCopy.dataArr[index].ansMarkByUser=copyC;
  setQuestion(questionCopy);
  }

  const deleteValue = (item) => {
item = item.slice(0,-1)

 setRes(item)

  question.dataArr[index].ansMarkByUser=item;
 setQuestion(question);
  }

 
  


  return (
    <>
      <div className="quiz-header ">
        <div className="row">
          <div className="col-xl-6 xol-lg-6">
            <div className="exam_name">NEET-UG 2013</div>
          </div>
          <div className="col-xl-6 xol-lg-6 helpinstruction">
            <div className="text-right helpinstruction-change">
              <strong className="color-white">
                <i className="question-sprite tooltip-light-blue mR5"></i>
                Instructions
              </strong>
            </div>
            <div className="text-right helpinstruction-change">
              <strong className="color-white">Question Paper</strong>
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
        <div className="roows">
          <div>
            {question.dataArr[index].questionFilter == 1 && (
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
                        return (
                          <ul className="" key={i}>
                            <li className="answer_box margin_bottom incorrect">
                              <label for={"two" + i}>
                                <input
                                  type="checkbox"
                                  name="question"
                                  id={"two" + i}
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
                                    question?.dataArr[index]?.ansMarkByUser
                                      ?.toString()
                                      .indexOf(i + "") > -1
                                      ? true
                                      : false
                                  }
                                />
                                <div
                                  dangerouslySetInnerHTML={{ __html: item }}
                                />
                              </label>
                            </li>
                          </ul>
                        );
                      })
                    : null}
                </div>
              </div>
            )}
            {question.dataArr[index].questionFilter == 2 && (
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
                      return (
                        <ul className="" key={i}>
                          <li className="answer_box margin_bottom incorrect">
                            <div className="dispay-flex">
                              <div className="class-50">
                                {" "}
                                <div
                                  dangerouslySetInnerHTML={{ __html: item }}
                                />
                              </div>
                              <div className="class-50">
                                {/* {a > b ? a : b} */}
                                <button
                                  className={
                                    "m-r btn-padding " +
                                    `${
                                      question.dataArr[index].ansMarkByUser[
                                        i * 2
                                      ] == "t"
                                        ? "green"
                                        : ""
                                    }`
                                  }
                                  onClick={() => truefalse(true, i)}
                                >
                                  true
                                </button>
                                <button
                                  className={
                                    "btn-padding " +
                                    `${
                                      question.dataArr[index].ansMarkByUser[
                                        i * 2
                                      ] == "f"
                                        ? "red"
                                        : ""
                                    }`
                                  }
                                  onClick={() => truefalse(false, i)}
                                >
                                  false
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      );
                    })
                  : null}
              </div>
            )}

            {question.dataArr[index].questionFilter == 3 && (
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
                            question.dataArr[index]?.quesTextHighlight,
                        }}
                      />
                    </li>
                  </ul>
                </div>
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
                      const noOfComponents =
                        question.dataArr[index].noOfComponents;
                      const _answer =
                        question.dataArr[index].ansMarkByUser.split(",");

                      return (
                        <>
                          <div className="col-3">
                            <div className="class-50 ">
                              {[...Array(noOfComponents)].map((y, j) => {
                                const strToDecode =
                                  j + 1 + "-&#" + (97 + i) + ";";
                                const parser = new DOMParser();
                                const answerDisplayName =
                                  parser.parseFromString(
                                    `<!doctype html><body>${strToDecode}`,
                                    "text/html"
                                  ).body.textContent;
                                let _a = 1000;
                                if (_answer[j] && _answer[j] !== "#") {
                                  _a = _answer[j].charCodeAt(1) - 97;
                                }
                                const _className = _a == i ? "green" : "";
                                return (
                                  <>
                                    <button
                                      className={"match-btn " + `${_className}`}
                                      onClick={() => matchQuestion(i, j)}
                                    >
                                      {answerDisplayName}
                                    </button>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      );
                    })
                  : null}
              </div>
            )}
            {question.dataArr[index].questionFilter == 4 && (
              <div>
                <div className="question-box">
                  <ul className="">
                    <li className="">
                      {question.dataArr[index].quesText
                        .split("..::::..")
                        .map((i, ind) => {
                          let count = 1;
                          count += ind;
                          console.log(count);

                          return (
                            <>
                              <div className="row mt-2">
                                <span>{ind + 1}</span>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: i,
                                  }}
                                />
                              </div>
                              {question &&
                                question.dataArr &&
                                question.dataArr[index] &&
                                question.dataArr[index]?.optionsArr.map(
                                  (item, it) => (
                                    <button
                                      onClick={() => btnTheme(it, ind, count)}
                                      className={
                                        "btn-theme" +
                                        `${
                                          question.dataArr[index].ansMarkByUser[
                                            ind*2
                                          ] ==
                                          it +1
                                            ? " green"
                                            : ""
                                        }`
                                      }
                                      dangerouslySetInnerHTML={{
                                        __html: item,
                                      }}
                                    />
                                  )
                                )}
                            </>
                          );
                        })}
                    </li>
                  </ul>
                </div>
                <div className="question-box"></div>
              </div>
            )}
            {question.dataArr[index].questionFilter == 8 && (
              <div>
                <div className="question-box">
                  <ul className="">
                    <li className="">
                      {question.dataArr[index].quesText
                        .split("..::::..")
                        .map((i, ind) => {
                          let count = 1;
                          count += ind;
                          console.log(count);

                          return (
                            <>
                              <div className="row mt-2">
                                <span>{ind + 1}</span>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: i,
                                  }}
                                />
                              </div>
                              <div className="super-parent-calc">
                              <h2>Your Answer</h2>
                           <h2>{res}</h2>
                              <div className="parent-calc">
                                <div className="children-1">
                                  <ul>
                                    <li><button onClick={()=>pusher(0)}>0</button></li>
                                    <li><button onClick={()=>pusher(".")}>.</button></li>
                                    <li><button onClick={()=>deleteValue(res)}>x</button></li>
                                    <li><button onClick={()=>pusher(1)}>1</button></li>
                                    <li><button onClick={()=>pusher(2)}>2</button></li>
                                    <li><button onClick={()=>pusher(3)}>3</button></li>
                                    <li><button onClick={()=>pusher(4)}>4</button></li>
                                    <li><button onClick={()=>pusher(5)}>5</button></li>
                                    <li><button onClick={()=>pusher(6)}>6</button></li>
                                    <li><button onClick={()=>pusher(7)}>7</button></li>
                                    <li><button onClick={()=>pusher(8)}>8</button></li>
                                    <li><button onClick={()=>pusher(9)}>9</button></li>
                                  </ul>
                                </div>
                                <div className="children-2">
                                  <ul>
                                    <li><button>k</button>  </li>
                                    <li><button onClick= {()=>pusher("-")}>-</button>  </li>
                                    <li><button>ok</button> </li>
                                  </ul>
                                </div>
                              </div>
                              </div>
                            </>
                          );
                        })}
                    </li>
                  </ul>
                </div>
                <div className="question-box"></div>
              </div>
            )}
          </div>

          <div>
            <RightBar
              parentData={myFunction2}
              notAnswers={
                question.dataArr.filter((item) => item.noAnswer == "#").length
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
          {/* <div>
            <Button
              variant="primary"
              type="button"
              className="btn"
              onClick={() => prev()}
            >
              prev
            </Button>
          </div> */}
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
