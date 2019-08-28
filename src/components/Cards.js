import React from 'react';
import styled from 'styled-components';
import { Droppable } from "react-beautiful-dnd";
import Card from './Card';

export default (props) => {

  const deleteCard = (index) => {
    let json = localStorage.getItem('lists');
    let list = JSON.parse(json);
    let newCards = list[props.index].cards.filter((item, ix) => item !== list[props.index].cards[index]);
    list[props.index].cards = newCards;
    props.updateList(list);
  }

  return (
    <Droppable droppableId={`list-${props.index}`}>
      {provided => (
        <Cards ref={provided.innerRef} {...provided.droppableProps}>
          {
            props.data.map((card, index) => (
              <Card 
                index={index} 
                category={props.index} 
                key={index} 
                message={card}
                deleteCard={() => { deleteCard(index) }} /> 
            ))
          }
          {provided.placeholder}
        </Cards>
      )}
    </Droppable>
  )
}

const Cards = styled.div`
  min-height: 50px;
`;