import React, { useState } from 'react';
import style from './singlenote.module.css';

export default function SingleNote({ text, date, uniq, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSaveClick = () => {
    handleEdit(uniq, editedText);
    setIsEditing(false);
  };

  return (
    <div key={uniq} className={style.note}>
      <div className={style.note_top}>
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
            onBlur={handleSaveClick}
            autoFocus
          />
        ) : (
          <>
            <h1 className={style.note_heading}>
              {text.split(' ').length > 2 ? text.split(' ').slice(0, 3).join(' ') + '...' : text}
            </h1>
            <span className={style.note_date}>{date}</span>
          </>
        )}
      </div>
      <div className={style.bottom}>
        {isEditing ? (
          <button onClick={handleSaveClick} className={style.save_button}>
            Save
          </button>
        ) : (
          <span onClick={() => setIsEditing(true)} className="material-symbols-outlined">
            edit
          </span>
        )}
        <span onClick={() => handleDelete(uniq)} className="material-symbols-outlined danger">
          delete
        </span>
      </div>
    </div>
  );
}
