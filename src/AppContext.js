import React, { useState ,useContext ,createContext} from "react";

import questions from "./Helpers/QuestionBank";
import App from "./App"




export const MainContext = createContext();

const AppContext = ({children}) =>{


    const [waiting,setWaiting] = useState(true)
    const [loading,setLoading] = useState(false)
    // const [question,setQuestion] = useState([])
    // const [index,setIndex] = useState(0)
    const [correct,setCorrect]= useState(0)
    const [error,setError]= useState(false)
    const [isModalOpen,setIsModalOpen] = useState(false)
    

  

    return <MainContext.Provider value={{waiting,loading,correct,error,isModalOpen}}> {children}</MainContext.Provider>

}

export default AppContext;

export const withContext = (Component) => (props) => {
    return (
      <MainContext.Consumer>
        {(value) => <Component context={value} {...props} />}
      </MainContext.Consumer>
    );
  };
// export const useGlobalContext = ()=>{
//     return useContext(AppContext)
// }

// export {AppContext,AppProvider}