import { View } from "react-native";

import ProfileCard from "./ProfileCard";
import Members from "./Members";

export default function GroupScreen() {
  return (
    <View>
      <ProfileCard />
      <Members />
    </View>
  );
}
