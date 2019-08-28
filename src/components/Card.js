// Dependencies
import React from 'react';
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";

export default (props) => {
  return (
    <Draggable draggableId={`item-${props.category}-${props.index}`} index={props.index}>
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Card>
            {props.message}
            <i
              onClick={props.deleteCard}
              className="fa fa-trash-o icon"
              aria-hidden="true"
            />
          </Card>
        </div>
      )}
    </Draggable>
  )
}

const Card = styled.div`
  padding: 15px 10px;
  margin: 5px 10px;
  border: solid 1px rgba(51, 51, 51, 0.2);
  background: #fff;
  border-radius: 3px;
  color: #444;
  cursor: pointer;
  padding-right: 20px;
  position: relative;
  .icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }

`;
