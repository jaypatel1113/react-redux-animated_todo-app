import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {useSelector, useDispatch} from "react-redux";

import {delTodo} from "../actions/index";

const ShowItem = () => {

    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();

    return (
        <>
            <AnimatePresence>
                <motion.div
                    className="showItems"
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 2, type: "spring", stiffness: 150 }}
                    exit={{ x: "-100vw"}}
                >
                    {list.map((elem) => {
                        return (
                            <AnimatePresence>
                            <motion.div
                                className="eachItem"
                                key={elem.id}
                                initial={{ x: "100vw" }}
                                animate={{ x: 0 }}
                                // transition={{type:'spring', stiffness: 150}}
                                exit={{ x: "-100vw", scale: [1,0]}}
                            >
                                <h3>{elem.data}</h3>
                                <div className="todo-btn">
                                    <motion.i
                                        className="far fa-trash-alt add-btn"
                                        title="Delete Item"
                                        onClick={() => dispatch(delTodo(elem.id))}
                                        whileHover={{scale: 1.07}}
                                        whileTap={{scale: 0.8}}
                                        transition={{yoyo: Infinity}}
                                    ></motion.i>
                                </div>
                            </motion.div>
                            </AnimatePresence>
                        );
                    })}
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default ShowItem;
