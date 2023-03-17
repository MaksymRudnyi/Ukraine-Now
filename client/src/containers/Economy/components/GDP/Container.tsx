import { Box } from "@chakra-ui/react";
import { Card, Action } from "../../../../components";
import { useNumThousands } from "../../../../hooks/useNumThousands";
import { useTranslation } from "react-i18next"; 

export const Container = ({ data, title, onClick}) => {
    const { t} = useTranslation();
    const value = useNumThousands(data[0]?.value)

    return (
        <Box cursor={'pointer'} height={'100%'} onClick={onClick}>
            <Card
              // value={<Action>{`$${data[0]?.value?.toFixed(2)}`}</Action>}
              // changeNumberFormat(data[0])
              value={<Action>{value}</Action>}
              title={title}
              helpText={t('economy.year', { year: data[0].date })}
            />
          </Box>
    )
}