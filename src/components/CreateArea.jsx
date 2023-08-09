import React, {useState} from "react";

function CreateArea(prop) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const {name, value} = event.target
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function handleClick(event) {
    prop.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input 
          name="title" 
          value={note.title} 
          placeholder="Title" 
          onChange={handleChange} 
        />
        <textarea 
          name="content" 
          value={note.content} 
          onChange={handleChange} 
          placeholder="Write a note..." 
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
