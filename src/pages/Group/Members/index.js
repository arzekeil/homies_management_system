import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import MemberCard from "./MemberCard";
import { palette } from "../../../palette";

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
  const handleOpenMember = () => {
    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.header}>In da house</Text>
        <TouchableOpacity onPress={() => handleAddMember()}>
          <View style={styles.button}>
            <MaterialIcons name="add-box" size={48} color={palette.FLAME} />
          </View>
        </TouchableOpacity>
      </View>
      {membersList.map((memberData) => {
        return (
          <TouchableOpacity onPress={() => handleOpenMember()} key={memberData.id}>
            <MemberCard
              memberFullName={memberData.memberFullName}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: "7.5%",
    paddingRight: "7.5%",
  },
  card: {
    borderWidth: 5,
    borderColor: "purple",
  },
  containerHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
  },
});
