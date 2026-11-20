import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

const COLORS = {
  bg: "#F4F0FB",
  card: "#FFFFFF",
  ink: "#2B1B3D",
  muted: "#7A6A8C",
  accent: "#8B6FD6",
  line: "#E4D8EE",
};

const STATS = [
  { label: "Posts", value: "24" },
  { label: "Followers", value: "3.1" },
  { label: "Following", value: "310" },
];

const DETAILS = [
  { label: "Email", value: "crestalbaylon@gmail.com" },
  { label: "Location", value: "Opol, Misamis Oriental" },
  { label: "School", value: "Opol Community College" },
  { label: "Joined", value: "November 2026" },
];

const PHOTOS = [
  require("../../../../assets/images/sunset.jpg"),
  require("../../../../assets/images/view1.jpg"),
  require("../../../../assets/images/view2.jpg"),
];

export default function Profile() {
  const { width } = useWindowDimensions();
  const size = Math.floor((Math.min(width, 600) - 36) / 3);

  return (
    <ScrollView
    style={styles.screen}
    contentContainerStyle={styles.content}
    showsVerticalScrollIndicator={false}
    >
    
      {/* Cover + avatar */}
      <View style={styles.coverWrap}>
        <View style={styles.cover} />
        <Image
          source={require("../../../../assets/images/profile1.jpg")}
          style={styles.avatar}
        />
      </View>

      {/* Name */}
      <View style={styles.identity}>
        <Text style={styles.name}>Crestal Baylon</Text>
        <Text style={styles.username}>@crisviii</Text>
        <Text style={styles.bio}>
          IT student. I build small apps and take too many sunset photos.
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        {STATS.map((s, i) => (
          <View
            key={s.label}
            style={[styles.stat, i > 0 && styles.statDivider]}
          >
            <Text style={styles.statValue}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* Edit Profile */}
      <Pressable style={styles.editBtn}>
        <Text style={styles.editText}>Edit Profile</Text>
      </Pressable>

      {/* Personal details */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>About</Text>
        {DETAILS.map((d, i) => (
          <View
            key={d.label}
            style={[styles.detailRow, i > 0 && styles.detailBorder]}
          >
            <Text style={styles.detailLabel}>{d.label}</Text>
            <Text style={styles.detailValue}>{d.value}</Text>
          </View>
        ))}
      </View>

      {/* Photo grid */}
      <Text style={[styles.sectionTitle, styles.gridTitle]}>Posts</Text>
      <View style={styles.grid}>
        {PHOTOS.map((photo, i) => (
          <Image
            key={i}
            source={photo}
            resizeMode="cover"
            style={{
              width: size - 4,
              height: size - 4,
              margin: 2,
              backgroundColor: COLORS.line,
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.bg },
  content: { paddingBottom: 40, maxWidth: 600, width: "100%", alignSelf: "center" },

  coverWrap: { marginBottom: 56 },
  cover: { height: 140, backgroundColor: COLORS.accent },
  avatar: {
    position: "absolute",
    left: 20,
    bottom: -48,
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 4,
    borderColor: COLORS.bg,
    backgroundColor: COLORS.line,
  },

  identity: { paddingHorizontal: 20 },
  name: { fontSize: 26, fontWeight: "800", color: COLORS.ink },
  username: { fontSize: 15, color: COLORS.accent, marginTop: 2 },
  bio: { fontSize: 15, color: COLORS.muted, marginTop: 10, lineHeight: 22 },

  statsRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.line,
  },
  stat: { flex: 1, alignItems: "center" },
  statDivider: { borderLeftWidth: 1, borderLeftColor: COLORS.line },
  statValue: { fontSize: 20, fontWeight: "700", color: COLORS.ink },
  statLabel: { fontSize: 13, color: COLORS.muted, marginTop: 2 },

  editBtn: {
    marginHorizontal: 20,
    marginTop: 18,
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
    backgroundColor: COLORS.ink,
  },
  editText: { color: "#FFFFFF", fontSize: 15, fontWeight: "600" },

  card: {
    backgroundColor: COLORS.card,
    marginHorizontal: 20,
    marginTop: 22,
    padding: 18,
    borderRadius: 16,
  },
  sectionTitle: { fontSize: 17, fontWeight: "700", color: COLORS.ink, marginBottom: 6 },
  detailRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 11 },
  detailBorder: { borderTopWidth: 1, borderTopColor: COLORS.line },
  detailLabel: { fontSize: 14, color: COLORS.muted },
  detailValue: { fontSize: 14, color: COLORS.ink, fontWeight: "500", flexShrink: 1, textAlign: "right", marginLeft: 16 },

  gridTitle: { marginHorizontal: 20, marginTop: 24, marginBottom: 10 },
  grid: { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 18 },
  gridItem: {
    width: "33.333%",
    aspectRatio: 1,
    padding: 2,
  },
  gridImg: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.line,
  },
});