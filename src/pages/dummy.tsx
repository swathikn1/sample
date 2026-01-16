import {useState} from 'react';
import './dummy.css'

function Hello() {
  const [text,setText]=useState('');
  const [list,setList]=useState<string[]>(JSON.parse(localStorage.getItem('list')||'[]'));
  const [editIndex,setEditIndex]=useState<number|null>(null);

  const todo =()=>{
    const updatedList=[text,...list]
    setList(updatedList);
    setText('');
    localStorage.setItem('list',JSON.stringify(updatedList));
}

    const edit = (index: number) => {
        setText(list[index]);  
        setEditIndex(index);    
    };

    const update=()=>{
        if(editIndex===null||!text)return;

        const updatedList=[...list]
        updatedList[editIndex]=text;

        setList(updatedList)
        setText('');
        localStorage.setItem('list',JSON.stringify(updatedList));
    };
    
    const del=(index: number) => {
        const updatedList=list.filter((_,i)=>i!==index);
        setList(updatedList)
        localStorage.setItem('list', JSON.stringify(updatedList))
    }

  return (
  <div className={`container ${editIndex !== null ? 'editing' : ''}`}>
    <div className="input-row">
      <input value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"/>

      <button className="add-btn" onClick={todo}>Add</button>
      <button className="update-btn" onClick={update}>Update</button>
    </div>

    <div className="list-container">
      {list.map((item, i) => (
        <div key={i} className="todo-item">
          <span>{item}</span>
          <div>
            <button onClick={() => edit(i)}>Edit</button>
            <button onClick={() => del(i)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Hello;
