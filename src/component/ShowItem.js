import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {useSelector, useDispatch} from "react-redux";

import {delTodo} from "../actions/index";

const ShowItem = () => {

    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();

    return (
        <>
                <motion.div
                    className="showItems"
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 2, type: "spring", stiffness: 150 }}
                    >
                    <AnimatePresence>
                    {list.map((elem) => {
                        return (
                            <motion.div
                                className="eachItem"
                                key={elem.id}
                                initial={{ x: "100vw" }}
                                animate={{ x: 0 }}
                                // transition={{type:'spring', stiffness: 150}}
                                exit={{ x: "-100vw"}}
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
                        );
                    })}
                    </AnimatePresence>
                </motion.div>
        </>
    );
};

export default ShowItem;
