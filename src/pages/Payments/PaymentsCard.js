import { Box, Text, Flex } from "@react-native-material/core";

export default function PaymentsCard(props) {
  const { payer, amount, date, title, payees } = props;
  const parsedDate = new Date(date);
  return (
    <Box w={"100%"} h={100} m={4} p={20} style={{ backgroundColor: "#DBDBDB" }}>
      <Flex fill direction="row">
        <Box pr={20}>
          <Text>{parsedDate.toDateString().split(" ")[1]}</Text>
          <Text>{parsedDate.toDateString().split(" ")[2]}</Text>
        </Box>
        <Flex fill direction="column">
          <Box>
            <Text>
              {payer} paid ${amount} for {title}
            </Text>
          </Box>
          <Flex direction="row" m={4}>
            {payees.map((payee) => (
              <Box style={{ backgroundColor: "salmon" }} m={4}>
                <Text>{payee.id}</Text>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
