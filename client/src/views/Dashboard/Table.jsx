import * as React from 'react';
import { Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination, TableRow} from '@material-ui/core';

const columns = [
    { id: 'productName', label: 'Product Name', minWidth: 170 },
    { id: 'date', label: 'Date', minWidth: 100 },
    {
      id: 'tid',
      label: 'Transcation Detail',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'price',
      label: 'Price',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'bname',
      label: 'Bidder Name',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(productName, date, tid, price,bname) {
    return { productName, date, tid, price, bname};
  }
  
  const rows = [
    createData('Kohenoor', '21/11/20121', "XXXXXXXXXX", 3000,"Virat Kohali"),
    createData('Galaxy', '21/11/20121', "XXXXXXXXXX", 4000,"Enternal"),
    createData('Painting', '21/11/20121', "XXXXXXXXXX", 5000,"Jatin Goyal"),
    createData('Scaler', '21/11/20121', "XXXXXXXXXX", 6000,"Shahnawaz"),
    createData('Pepcoding', '21/11/20121', "XXXXXXXXXX", 7000,"Sahil Gupta")
  ];
  
  export default function ColumnGroupingTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={12}>
                  Your Bidding History
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.date}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
  