import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const COLORS = {
  bg: "#F6F0FA",
  card: "#FFFFFF",
  ink: "#2B1B3D",
  muted: "#7A6A8C",
  accent: "#8B6FD6",
  line: "#E4D8EE",
};

const POSTS = [
  {
    id: "1",
    username: "maria.Ann",
    avatar: null,
    time: "2h",
    text: "Sunset sa Opol today. Worth the long walk home.",
    image: require("../../../../assets/images/sunset.jpg"),
    likes: 128,
    comments: 14,
  },
  {
    id: "2",
    username: "Von.Vanob",
    avatar: null,
    time: "5h",
    text: "Hapon na namn na ang ganda ng kulay ng langit. Sana laging ganito pag uwi ko",
    image: require("../../../../assets/images/view1.jpg"),
    likes: 76,
    comments: 9,
  },
  {
    id: "3",
    username: "anna.lopez",
    avatar: null,
    time: "8h",
    text: "Coffee first, then classes.",
    image: require("../../../../assets/images/view4.jpg"),
    likes: 203,
    comments: 31,
  },
  {
    id: "4",
    username: "Jah.Viiy",
    avatar: null,
    time: "1d",
    text: "Weekend trip. Sulit ang pagod kapag ganito ang langit na sasalubong sa taas.",
    image: require("../../../../assets/images/view3.jpg"),
    likes: 94,
    comments: 12,
  },
];

function Post({ item }: { item: (typeof POSTS)[number] }) {
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        {item.avatar ? (
          <Image source={item.avatar} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.avatarPlaceholder]}>
            <Text style={styles.avatarLetter}>
              {item.username.charAt(0).toUpperCase()}
            </Text>
          </View>
        )}
        <View style={styles.headerText}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.time}>{item.time} ago</Text>
        </View>
      </View>

      <Text style={styles.postText}>{item.text}</Text>
      <Image source={item.image} style={styles.postImage} />

      <View style={styles.actions}>
        <Text style={styles.actionText}>{item.likes} likes</Text>
        <Text style={styles.actionText}>{item.comments} comments</Text>
      </View>
    </View>
  );
}

export default function Home() {
  return (
    <View style={styles.screen}>
      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post item={item} />}
        ListHeaderComponent={<Text style={styles.title}>Instagram</Text>}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.bg },
  list: { paddingBottom: 40, maxWidth: 600, width: "100%", alignSelf: "center" },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.accent,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 14,
  },

  post: {
    backgroundColor: COLORS.card,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
  },
  postHeader: { flexDirection: "row", alignItems: "center", padding: 14 },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: COLORS.accent,
    backgroundColor: COLORS.line,
  },
  avatarPlaceholder: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.line,
  },
  avatarLetter: { fontSize: 18, fontWeight: "700", color: COLORS.accent },
  headerText: { marginLeft: 12 },
  username: { fontSize: 15, fontWeight: "700", color: COLORS.ink },
  time: { fontSize: 12, color: COLORS.muted, marginTop: 1 },

  postText: {
    fontSize: 15,
    color: COLORS.ink,
    lineHeight: 22,
    paddingHorizontal: 14,
    paddingBottom: 12,
  },
  postImage: { width: "100%", height: 220, backgroundColor: COLORS.line },

  actions: {
    flexDirection: "row",
    gap: 18,
    padding: 14,
  },
  actionText: { fontSize: 13, color: COLORS.muted, fontWeight: "500" },
});
