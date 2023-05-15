// import { Routes, Route } from "react-router-dom";

// import Profile from "./components/Profile";
// import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
// import UpdateUser from "./components/UpdateUser";
// import 'antd/dist/reset.css';
// import "./assets/styles/main.css";
// import "./assets/styles/responsive.css";

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<SignIn/>} />
//         <Route path="/sign-in" element={<SignIn/>} />
//         <Route path="/sign-up" element={<SignUp/>} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/update" element={<UpdateUser />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import LoginForm from "./components/LoginForm";
import UpdateUser from "./components/UpdateUser";
import { Button } from 'antd';
import 'antd/dist/reset.css';
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

const { Header, Content } = Layout;

const storage = {
  set(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key){
    return JSON.parse(localStorage.getItem(key));
  }
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(storage.get('isLoggedIn') ?? false);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    storage.set('isLoggedIn', false);
    navigate('/');
  };

  return (
    <div>
      <Layout className="layout">
        <Header>
          <Menu theme="primary" mode="horizontal" style={{position: 'relative'}}>
            {isLoggedIn && (
              <>
                <Menu.Item key={'1'} style={{display: 'inline-block'}}>
                  <Link to={'/home'}>{'Home'}</Link>
                </Menu.Item>
                <Menu.Item key={'2'} style={{display: 'inline-block'}}>
                  <Link to={'/update'}>{'UpdateUser'}</Link>
                </Menu.Item>
                
                <>
                  <div style={{ position: 'absolute', right: 0 }}>
                    <Button
                      type="primary"
                      danger
                      ghost
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                </>
              </>
            )}
            {
              isLoggedIn && (
                <>
                <Menu.Item key={'3'} style={{display: 'inline-block'}}>
                  <Link to={'/signup'}>{'SignUp'}</Link>
                </Menu.Item>
                </>
              )
            }
          </Menu>
        </Header>
        <Content style={{ minHeight: 'calc(100vh - 100px)' }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/home" element={<Profile />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/update" element={<UpdateUser />} />
              {!isLoggedIn && <Route path="/" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />}
              {isLoggedIn && (
                <>
                  <Route path="/update/:id" element={<UpdateUser />} />
                </>
              )}
            </Routes>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
