import React, {useState} from "react";
import { motion } from "framer-motion";
import {useDispatch} from "react-redux";

import {addTodo} from "../actions/index";

const AddItem = () => {
    const [inpData, setInpData] = useState('');

    const dispatch = useDispatch();

    return (
        <>
            <motion.div className="addItems"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 200 }}
            >
                <input
                    type="text"
                    placeholder="✍ Add Items..."
                    value={inpData}
                    onChange={(e) => setInpData(e.target.value)}
                />
                <i
                    className="fa fa-plus add-btn"
                    title="Add Item"
                    onClick={() => dispatch(addTodo(inpData), setInpData(''))}
                ></i>
            </motion.div>
        </>
    );
};

export default AddItem;
