import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const users = [
  {
    username: "CrypticMick",
    name: "Mickey Martinez",
  },
  { username: "SnoopDogg", name: "Calvin Broadus Jr." },
  {
    username: "NateDogg",
    name: "Nathaniel Hale",
  },
];

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>

        {users.map((user) => (
          <Link
            key={user.username}
            href={`/${user.username}`}
            style={styles.link}
          >
            Open {user.name}'s Dynamic Profile
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: "bold",
  },
});
