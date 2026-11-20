import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const photos = [
  { image: require('../../assets/images/sunset.jpg'), likes: 120, caption: 'Beautiful sunset 🌅' },
  { image: require('../../assets/images/view1.jpg'), likes: 342, caption: 'Magandang view dito ✨' },
  { image: require('../../assets/images/view2.jpg'), likes: 87, caption: 'Perfect day 🌿' },
  { image: require('../../assets/images/view3.jpg'), likes: 1204, caption: 'Hindi ako magsasawa dito 😍' },
  { image: require('../../assets/images/view4.jpg'), likes: 56, caption: 'Weekend vibes ☀️' },
];

function Post({ photo }: { photo: (typeof photos)[number] }) {
  return (
    <View style={styles.post}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>C</Text>
        </View>
        <View>
          <Text style={styles.username}>crestal.baylon</Text>
          <Text style={styles.location}>Opol, Philippines</Text>
        </View>
        <Text style={styles.more}>•••</Text>
      </View>

      <Image source={photo.image} style={styles.postImage} />

      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Text style={styles.actionIcon}>♡</Text>
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionIcon}>➤</Text>
        </View>
        <Text style={styles.bookmark}>♧</Text>
      </View>

      <Text style={styles.likes}>{photo.likes} likes</Text>

      <Text style={styles.caption}>
        <Text style={styles.username}>crestal.baylon</Text>
        {' '}{photo.caption}
      </Text>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logo}>Instagram</Text>
          <Text style={styles.headerIcon}>♡</Text>
        </View>

        {photos.map((photo, index) => (
          <Post key={index} photo={photo} />
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <Text style={styles.navIcon}>⌂</Text>
        <Text style={styles.navIcon}>⌕</Text>
        <Text style={styles.navIcon}>＋</Text>
        <Text style={styles.navIcon}>♡</Text>
        <Text style={styles.navIcon}>◉</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  logo: { fontSize: 27, fontWeight: 'bold', fontStyle: 'italic' },
  headerIcon: { fontSize: 27 },
  post: { marginBottom: 20 },
  profile: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#d62976',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 20 },
  username: { fontWeight: 'bold' },
  location: { fontSize: 12, color: '#555' },
  more: { marginLeft: 'auto', fontSize: 20 },
  postImage: { width: '100%', height: 350, resizeMode: 'cover' },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  leftActions: { flexDirection: 'row', gap: 18 },
  actionIcon: { fontSize: 27 },
  bookmark: { fontSize: 25 },
  likes: { fontWeight: 'bold', paddingHorizontal: 12 },
  caption: { padding: 12, lineHeight: 21 },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  navIcon: { fontSize: 25 },
});
