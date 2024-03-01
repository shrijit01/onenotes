import React, { useState } from 'react';
import style from './input.module.css';

function Input({ addNotes }) {
    const [newTextValue, setNewTextValue] = useState();
    
    const handleChange = (e) => {
        setNewTextValue(e.target.value);
    }

    const handleSubmit = () => {
        if (newTextValue === '') {
            alert("Please Write Note")
        } else {
            addNotes(newTextValue);
            setNewTextValue('');
        }
    }

    const handleKeyPress =(e)=>{
        if(e.key === 'Enter'){
            handleSubmit();
            setNewTextValue("")
        }
    }

    return (
        <>
            <div className={style.input_Container}>
                <div className={style.input_btn}>
                    <input className={style.input_text}
                        rows={1}
                        cols={10}
                        type="text"
                        placeholder='Take Notes..'
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        value={newTextValue}
                    />
                    <span onClick={handleSubmit} className="material-symbols-outlined ">
                        send
                    </span>
                </div>
            </div>
        </>
    )
}

export default Input