import React, {useState} from 'react';
import './App.css';
import { useRoutes } from "react-router-dom";
import router from "./router";
function App() {
    // const [count, setCount] = useState()
    const outlet = useRoutes(router)
    return (
        <div className="App">
            {/*<Link to="./home">Home</Link>*/}
            {/*<Link to="./about">About</Link>*/}
            {/*<Link to="./user">User</Link>*/}
            {outlet}
          {/*  <Button type="primary">button</Button>*/}
          {/*  <UpCircleFilled style={{fontSize:'40px', color: "red"}}/>*/}
          {/*  <Outlet></Outlet>*/}
        </div>
      );
}

export default App;
