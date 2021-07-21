import React from 'react'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {TableBody, TableCell, TableRow} from "@material-ui/core";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import PropTypes from "prop-types";

export const DroppableComponent = (onDragEnd) => (props) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={'DnD'}>
        {(provided) => (
          <TableBody ref={provided.innerRef} {...provided.droppableProps} {...props}>
            {props.children}
            {provided.placeholder}
          </TableBody>
        )}
      </Droppable>
    </DragDropContext>
  )
}

DroppableComponent.propTypes = {
  onDragEnd: PropTypes.func.isRequired,
}

export const DraggableComponent = (rowId, index) => (props) => {
  return (
    <Draggable key={`table-row-${rowId}`} draggableId={rowId} index={index}>
      {(provided) => (
        <TableRow ref={provided.innerRef} {...provided.draggableProps}>
          <TableCell key={`table-cell-dnd`} {...provided.dragHandleProps}>
            <DragHandleIcon/>
          </TableCell>
          {props.children}
        </TableRow>
      )}
    </Draggable>
  )
}

DraggableComponent.propTypes = {
  rowId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}