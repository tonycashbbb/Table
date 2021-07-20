import React from 'react'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {Checkbox, TableBody, TableCell, TableRow} from "@material-ui/core";
import DragHandleIcon from "@material-ui/icons/DragHandle";

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

export const DraggableComponent = (rowId, index, selectedRows, onCheckboxChange) => (props) => {
  const isSelected = selectedRows.includes(rowId)

  return (
    <Draggable key={`table-row-${rowId}`} draggableId={rowId} index={index}>
      {(provided) => (
        <TableRow ref={provided.innerRef} {...provided.draggableProps} >
          <TableCell key={`table-cell-dnd`} {...provided.dragHandleProps}>
            <DragHandleIcon/>
          </TableCell>
          <TableCell padding="checkbox">
            <Checkbox
              color={"primary"}
              value={rowId}
              checked={isSelected}
              onChange={() => onCheckboxChange(rowId)}
            />
          </TableCell>
          {props.children}
        </TableRow>
      )}
    </Draggable>
  )
}