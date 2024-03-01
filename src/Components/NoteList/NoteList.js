import React from 'react';
import style from './notes.module.css';
import SingleNote from '../SingleNote/SingleNote';

export default function Notes({ notes,handleDelete ,handleEdit}) {
    
    return (
        <>
            <div className={style.container}>
                {notes.map((note) => (
                    <SingleNote handleDelete={handleDelete} handleEdit={handleEdit} key={note.id} uniq={note.id} text={note.text} date={note.date} />
                ))}
            </div>
        </>
    )
}
