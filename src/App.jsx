import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import ChatMessage from "./components/ChatMessage";
// import MessageInput from "./components/MessageInput";
import { useNavigate } from 'react-router-dom';
import Docs from "./components/docs";
import { BrowserRouter } from 'react-router-dom';
import footer from "./components/footer";



import ChainadamyLanding from "./components/ChainadamyLanding";


import Landing from "./components/Landing";

const App = () => {
 
  return (


    <div>
      <BrowserRouter>
      <ChainadamyLanding />
      <footer />
</BrowserRouter>

      {/* <Landing /> */}
      {/* <Docs /> */}
     
     

    </div>
   
  );
};

export default App;


