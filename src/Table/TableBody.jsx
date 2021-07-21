import React, {Fragment, useEffect, useState} from 'react';
import {Checkbox, TableCell, TableBody as TableBodyM, TableRow} from "@material-ui/core";
import PropTypes from "prop-types";

import {DraggableComponent, DroppableComponent} from "./TableDnD";

const TableBody = ({
                     headers,
                     rows,
                     selectedRows,
                     handleCheck,
                     getOrderedRows
                   }) => {
  const [orderedRows, updateRows] = useState(rows);

  useEffect(() => {
    getOrderedRows?.(orderedRows)
  }, [orderedRows, getOrderedRows])

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = [...orderedRows];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateRows(items);
  }

  return (
    <TableBodyM component={DroppableComponent(handleOnDragEnd)}>
      {orderedRows.map((row, index) => (
        <TableRow key={row.id} component={DraggableComponent(row.id, index)}>
          {headers.map((header, index) => {
            return (
              <Fragment key={`table-row-${index}`}>
                {index === 0 && <TableCell key={`table-checkbox-${index}`} padding="checkbox">
                  <Checkbox
                    color={"primary"}
                    value={row.id}
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleCheck(row.id)}
                  />
                </TableCell>}
                <TableCell key={`table-cell-${index}`}>{row[header.value]}</TableCell>
              </Fragment>
            )
          })}
        </TableRow>
      ))}
    </TableBodyM>
  )
};

TableBody.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
    pda: PropTypes.string.isRequired,
    startWeek: PropTypes.string.isRequired,
    endWeek: PropTypes.string.isRequired,
    intervalSettings: PropTypes.string.isRequired,
    weekNumber: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
  })).isRequired,
  selectedRows: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCheck: PropTypes.func.isRequired,
  getOrderedRows: PropTypes.func,
}

export default TableBody