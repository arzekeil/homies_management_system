import { Box, Text, Flex } from "@react-native-material/core";
import { ProfilePicture } from "../../components/ProfilePicture";

export default function PaymentsCard(props) {
  const { payer, amount, date, title, payees } = props;
  const parsedDate = new Date(date);

  return (
    <Box
      w={"100%"}
      h={100}
      m={4}
      p={20}
      style={{
        backgroundColor: "#F9F9F9",
      }}
    >
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
          <Flex direction="row" m={2}>
            {payees
              .filter((payee) => !payee.paid)
              .map((payee) => (
                <ProfilePicture key={payee.id} id={payee.id} />
              ))}
            {payees
              .filter((payee) => payee.paid)
              .map((payee) => (
                <ProfilePicture key={payee.id} id={payee.id} greyed={true} />
              ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
