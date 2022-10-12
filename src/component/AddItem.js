import React, {useState} from "react";
import { motion } from "framer-motion";
import {useDispatch} from "react-redux";

import {addTodo} from "../actions/index";
import ShowError from "./ShowError";

const AddItem = () => {
    const [inpData, setInpData] = useState('');
    const [isError, setIsError] = useState(false);

    const dispatch = useDispatch();

    const handleAdd = () => {
        if(inpData === "") {
            setIsError(true)
            setTimeout(() => {
                setIsError(false);
            }, 2500);
            return;
        };
        dispatch(addTodo(inpData), setInpData(''));
    }

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
                    onClick={handleAdd}
                ></i>
            </motion.div>
            <motion.div>
                {isError && (<ShowError />)}
            </motion.div>
        </>
    );
};

export default AddItem;
