import React, { useContext } from "react";
import Main from "./Main"
import Login from "./Pages/Login/Login"

function App() {

  // const user = useContext(AuthContext);

  return (
    <>
      <div className="App">
        <Main />
        {/* {user ? (
          <Main />
        ) : (
          <Login />
        )} */}
      </div>
    </>
  );
}

export default App;
