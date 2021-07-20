import React, {useState} from 'react';
import {TableBody, TableCell, TableRow} from "@material-ui/core";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const MyTableBody = ({ headers, rows }) => {
  const [stateRows, updateRows] = useState(rows);
  
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = [...stateRows];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateRows(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId={"dnd"}>
        {(provided) => (
          <TableBody className={"dnd"} {...provided.droppableProps} ref={provided.innerRef}>
            {stateRows.map((row, index) => (
              <Draggable key={`table-row-${row.id}`} draggableId={row.id} index={index}>
                {(provided) => (
                  <TableRow ref={provided.innerRef} {...provided.draggableProps} >
                    <TableCell key={`table-cell-dnd`} {...provided.dragHandleProps}><DragHandleIcon/></TableCell>
                    {headers.map((header, index) => {
                      return <TableCell key={`table-cell-${index}`}>{row[header.value]}</TableCell>
                    })}
                  </TableRow>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </TableBody>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default MyTableBody;