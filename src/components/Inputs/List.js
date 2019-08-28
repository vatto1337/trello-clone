import React, { useState } from 'react';
import styled from 'styled-components';

export default (props) => {
  
  const [add, setAdd] = useState(false);
  const [title, setTitle] = useState('');

  function submitList() {
    if(title.length < 3) return alert('The title must contain at least 3 characters.');
    let json = localStorage.getItem('lists');
    let list = JSON.parse(json);
    list.push({
      title: title,
      cards: []
    });
    localStorage.setItem('lists', JSON.stringify(list));
    setAdd(false);
    props.updateList(list);
  }

  return (
  <Input>
    { add === true ? (
       <React.Fragment>
        <input 
          className="input" 
          type="text" 
          placeholder="List title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={submitList} className="button">Add</button>
        <button onClick={() => setAdd(false) } className="button">Cancel</button>
       </React.Fragment>
    ) : (
      <div onClick={() => setAdd(true) } className="add-more">
        <i className="fa fa-plus" aria-hidden="true"></i> Add another list
      </div>
    )}
  </Input>)
}

const Input = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: solid 1px rgba(78, 78, 78, 0.13);
  margin-bottom: 10px;
  padding-bottom: 10px;
  @media (max-width: 1000px) { 
    justify-content: center;
  }
  .input {
    padding: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: none;
    outline: none;
    color: #222;
  }
  .button {
    border: none;
    outline: none;
    background: rgba(34, 34, 34, 0.18);
    transition: ease all 0.4s;
    padding: 15px;
    border-radius: 0px;
    color: #fff;
    &:hover {
      cursor: pointer;
      background: rgba(34, 34, 34, 0.25);
    }    
  }
  .add-more {
    background: rgba(34, 34, 34, 0.18);
    transition: ease all 0.4s;
    padding: 15px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      background: rgba(34, 34, 34, 0.25);
    }
  }
`;