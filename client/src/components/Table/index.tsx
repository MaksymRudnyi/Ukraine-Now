import {
  Box,
  TableContainer,
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React, { useRef, useEffect, FC } from 'react';

type TableProps = {
  data: any;
  columns: any;
  selectedFn?: (row: any) => boolean;
  onRowClick?: Function;
};

export const Table: FC<TableProps> = ({
  data,
  columns,
  selectedFn,
  onRowClick,
}) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  const selectedRow = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    if (selectedRow.current) {
      selectedRow.current.scrollIntoView();
    }
  }, []);

  return (
    <TableContainer>
      <ChakraTable
        variant="striped"
        size={'sm'}
        mt={'32px'}
        display={'inline-block'}
        overflow={'auto'}
        sx={{ maxHeight: '368px' }}
      >
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <Box
                        position={'absolute'}
                        cursor={
                          header.column.getCanSort() ? 'pointer' : 'default'
                        }
                        mt={'-28px'}
                        {...{
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </Box>
                    )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>

        <Tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Tr
                key={row.id}
                ref={
                  selectedFn && selectedFn(row.original) ? selectedRow : null
                }
                onClick={() => onRowClick && onRowClick(row.original)}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td
                      key={cell.id}
                      bgColor={
                        selectedFn && selectedFn(row.original)
                          ? 'blue.100' + '!important'
                          : 'none'
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

// Table.propTypes = {
//     className: PropTypes.string,
//     data: PropTypes.arrayOf(PropTypes.object).isRequired,
//     columns: PropTypes.arrayOf(PropTypes.shape({
//         Header: PropTypes.any,
//         accessor: PropTypes.string.isRequired
//     }))
// };
