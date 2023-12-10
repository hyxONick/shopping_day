import React, {useState} from 'react';
import './App.css';
import { useRoutes } from "react-router-dom";
import router from "./router";
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
    // const [count, setCount] = useState()
    const outlet = useRoutes(router)
    return (
        <div className="App">
            {/*<Link to="./home">Home</Link>*/}
            {/*<Link to="./about">About</Link>*/}
            {/*<Link to="./user">User</Link>*/}
            <Provider store={store}>
                {outlet}
            </Provider>
          {/*  <Button type="primary">button</Button>*/}
          {/*  <UpCircleFilled style={{fontSize:'40px', color: "red"}}/>*/}
          {/*  <Outlet></Outlet>*/}
        </div>
      );
}

export default App;
