import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import MemberCard from "./MemberCard";

export default function Members() {
  const membersList = [
    {
      id: 1,
      memberFullName: "Ryan Rodericks",
    },
    {
      id: 2,
      memberFullName: "Francois Caines",
    },
    {
      id: 3,
      memberFullName: "Cheston Halim",
    },
    {
      id: 4,
      memberFullName: "Danielle Banes",
    },
  ];

  const handleAddMember = () => {
    return;
  }; 

  return (
    <View style={styles.container}>
      <View>
        <Text>In da house</Text>
        <TouchableOpacity onPress={() => handleAddMember()}>
          <View style={styles.button}>
            <MaterialIcons name="add-box" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      {membersList.map((memberData) => {
        return (
          <MemberCard
            memberFullName={memberData.memberFullName}
            key={memberData.id}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
});
