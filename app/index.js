import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>

        <Link
          href="/profileRoute?name=Mickey&lastname=Martinez"
          style={styles.link}
        >
          Open Mickey's Profile
        </Link>

        <Link
          href={{
            pathname: "/profileRoute",
            params: { name: "Morty", lastname: "Smith" },
          }}
          style={styles.link}
        >
          Open Morty's Profile
        </Link>

        <Link
          href={{
            pathname: "/CrypticMick",
            params: { name: "Mickey", lastname: "M" },
          }}
          style={styles.link}
        >
          Open Mickey's Dynamic Profile
        </Link>
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
