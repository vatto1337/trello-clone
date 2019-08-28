import React, { useState } from 'react';
import styled from 'styled-components';

export default (props) => {
  
  const [add, setAdd] = useState(false);
  const [message, setMessage] = useState('');

  const submitMessage = () => {
    const json = localStorage.getItem('lists');
    const list = JSON.parse(json);
    list[props.category].cards.push(message);
    props.updateList(list);
    setAdd(false);
  }

  return (<AddCard>
    { add === true ? (
      <React.Fragment>
        <textarea 
          className="input" 
          placeholder="Card message" 
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value) }  
        />
        <div className="buttons">
          <button onClick={submitMessage} className="button">Add</button>
          <button onClick={() => setAdd(false)} className="button">Cancel</button>
        </div>
      </React.Fragment>
    ) : <button onClick={() => setAdd(!add)} className="button">Add a new card</button> }
  </AddCard>)
}

const AddCard = styled.div`
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
  background: rgba(19, 19, 19, 0.08);

  .input {
    padding: 10px 10px;
    border: none;
    outline: none;
    resize: none;
    border-radius: 3px;
    min-width: 85%;
  }
  .button {
    width: 95%;
    padding: 10px 20px;
    margin: 2px;
    border: none;
    outline: none;
    background: rgba(19, 19, 19, 0.2);
    color: #fff;
    cursor: pointer;
  }
  .buttons {
    margin-top: 5px;
    display: flex;
    .button {
      width: 100%;
    }
  }
`;
