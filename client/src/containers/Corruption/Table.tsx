import { GetCorruption_corruption } from './__generated__/GetCorruption';
import { Box, TableContainer, Table,Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { FC, useRef, useEffect } from 'react';


type CurruptionTableProps = {
  corruption: GetCorruption_corruption[];
};

export const CorruptionTable: FC<CurruptionTableProps> = observer(
  ({ corruption }) => {
    const ukraineRef = useRef<HTMLTableRowElement>(null);

    useEffect(() => {
      if(ukraineRef.current) {
        ukraineRef.current.scrollIntoView();
      }
    }, [])
    return (
      <Box >
        <TableContainer>
          <Table variant='simple'
                 size={'sm'}
                 mt={'32px'}
                 display={'inline-block'}
                 overflow={'auto'}
                 sx={{maxHeight: '300px'}}>
            <Thead>
              <Tr>
                <Th isNumeric>
                  <Box position={'absolute'} mt={'-28px'}>Score</Box>
                </Th>
                <Th>
                  <Box position={'absolute'} mt={'-28px'}>Country</Box>
                </Th>
                <Th isNumeric>
                  <Box position={'absolute'} mt={'-28px'}>Rank</Box>
                </Th>
              </Tr>
            </Thead>

            <Tbody maxHeight={'300px'}>
              {corruption.map((country) => (
                <Tr key={country.country}
                    bgColor={country.iso3 === 'UKR' ? 'blue.200' : 'none'}
                    ref={country.iso3 === 'UKR' ? ukraineRef : null}
                >
                  <Td isNumeric>{country.score}</Td>
                  <Td>{country.country}</Td>
                  <Td isNumeric>{country.rank}</Td>
                </Tr>
              ))}
            </Tbody>

          </Table>
        </TableContainer>
      </Box>
    );
  }
);
