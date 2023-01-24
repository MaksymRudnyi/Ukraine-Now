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
  styles?: {
    tableContainer?: any;
  };
  selectedFn?: (row: any) => boolean;
  onRowClick?: Function;
};

export const Table: FC<TableProps> = ({
  data,
  columns,
  styles,
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
    <TableContainer
      overflowY={'auto'}
      maxH={'368px'}
      mt={'32px'}
      {...styles?.tableContainer}
    >
      <ChakraTable variant="striped" size={'sm'} sx={{ tableLayout: 'fixed' }}>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    width={header.getSize()}
                  >
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
                      width={cell.column.getSize()}
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
