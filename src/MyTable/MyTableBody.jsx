import React, {useState} from 'react';
import {TableBody, TableCell, TableRow} from "@material-ui/core";
import {DraggableComponent, DroppableComponent} from "./DragAndDrop";

const MyTableBody = ({
                       headers,
                       rows,
                       selectedRows,
                       handleCheckbox
                     }) => {
  const [stateRows, updateRows] = useState(rows);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = [...stateRows];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateRows(items);
  }

  return (
    <TableBody component={DroppableComponent(handleOnDragEnd)}>
      {stateRows.map((row, index) => (
        <TableRow key={row.id} component={DraggableComponent(row.id, index, selectedRows, handleCheckbox)}>
          {headers.map((header, index) => {
            return <TableCell key={`table-cell-${index}`}>{row[header.value]}</TableCell>
          })}
        </TableRow>
      ))}
    </TableBody>
  )
};

export default MyTableBody;