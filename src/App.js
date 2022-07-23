// import React, {useState, useEffect} from 'react';
import React from 'react';
import {motion} from 'framer-motion';
import {useDispatch} from "react-redux";

import {remAllTodo} from "./actions/index";
import Fig from './component/Fig';
import AddItem from './component/AddItem';
import ShowItem from './component/ShowItem';

import './App.css';

const App = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <Fig />
                    <AddItem />

                    <ShowItem />
                    
                    {/* clear all button  */}
                    <motion.div className="showItems"
                        initial={{y:'-150', opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{ delay: 2.2, type: "spring", stiffness: 400 }}
                        >
                        <motion.button 
                            className="btn effect04" 
                            data-sm-link-text="Remove All" 
                            onClick={() => dispatch(remAllTodo())}
                            whileHover={{scale: 1.1}}
                            transition={{yoyo: Infinity}}
                            whileTap={{scale: 0.8}}
                        >
                            <span className="remall"> CHECK LIST </span> 
                        </motion.button>
                    </motion.div>
                </div>
          </div>
        </>
    );
};

export default App;
