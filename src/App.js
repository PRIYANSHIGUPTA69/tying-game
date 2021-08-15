import React, { Component } from "react";
import "./App.css"
import NavbarComponent from "./Component/NavbarComponent"
import Keyboard from "./Component/keyboard/KeyboardComonent";
import TypingComponent from "./Component/TypingComponent/TypingComponent";
import Dashboard from "./Component/Dashboard";
import Summary from "./Component/SummaryComponent";
import { Provider } from "react-redux";
import store from "./store";
function App () {
   
        return (
            <Provider store={store}>
                  <div className="container d-flex">
           
           <div className="flex-8 jcc ">
               <NavbarComponent />
               <div className="bg-white flex-8">
                   <TypingComponent></TypingComponent>
                   <Dashboard></Dashboard>
                   <Keyboard></Keyboard>
               </div>
             
           </div>
           <div className="flex-4">
                       <Summary currentChar='a'></Summary>
                   </div>
       </div>
            </Provider>
          
            
        );
    }


export default App;
