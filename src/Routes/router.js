import React from 'react';
import { Routes, Route} from "react-router-dom"
import Quiz from '../common/Quiz';
import rightBar from '../common/RightBar';
import Result from '../common/Result';
import RightBar from '../common/RightBar';
function Router() {
    return (
            <Routes>
                <Route path='/' element={<Quiz />}/>
                <Route path='/Result' element={<Result />}/>
                {/* {/* <Route path='/register' element={<Registration />}/> */}
                <Route path='/rightbar' element={<RightBar/>}/>
            {/* <Route path='/products' element={<Products />}/>  */}
            </Routes>
    );
}

export default Router;