import React, {useState} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';

import MyTableHead from "./MyTableHead.js";
// import MyTableBody from "./MyTableBody";
import s from './MyTable.module.css'
import DragHandleIcon from "@material-ui/icons/DragHandle";

const MyTable = ({headers, rows}) => {
  const [stateRows, updateRows] = useState(rows);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = [...stateRows];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateRows(items);
  }

  return (
    <TableContainer component={Paper}>
      <Table classes={s}>
        <MyTableHead
          headers={headers}
        />

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

      </Table>
    </TableContainer>
  );
};

export default MyTable;