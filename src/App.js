import style from './App.css';
import { useState } from 'react';
import Input from './Components/Input/Input';
import Header from './Components/Header/Header';
import NoteList from './Components/NoteList/NoteList';

function App() {
  const [notes, setNotes] = useState([{
    text: "Coding",
    date: "02/29/24",
    id: Math.random()
  }]);
  // console.log(notes);

  const addNotes = (text) => {
    const date = new Date();
    const newNote = {
      id: Math.random(),
      date: date.toLocaleDateString(),
      text: text
    }
    // making a copy of previous notes  
    // const newNotes = [...notes, newNote];
    setNotes([...notes, newNote]);
  }

  const handleDelete =(id)=>{
    console.log("handleDelete Clicked",id);
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes)
  }


  const handleEdit = (id)=>{
    console.log('handle Edit Clicked ',id);
  }

  return (
    <>
      <div className={style.App}>
        <Header />
        <Input addNotes={addNotes} />
        <NoteList notes={notes} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </div>
    </>
  );
}

export default App;