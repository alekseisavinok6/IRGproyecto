import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '@/components/Header';
import Ranking from '@/components/Ranking';
import MenuCard from '@/components/MenuCard';

export default function Index() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Header restaurantName="Astor" />
        <Ranking score={4.8} />
        <Ranking score={4.6} />
        <Ranking score={4.3} />
        <Ranking score={4.1} />
        <Ranking score={4.0} />
        <MenuCard title="Entradas" onPress={() => { }} />
        <MenuCard title="Platos principales" onPress={() => { }} />
        <MenuCard title="Postres" onPress={() => { }} />
        <MenuCard title="Postres" onPress={() => { }} />
        <MenuCard title="Postres" onPress={() => { }} />
        <MenuCard title="Postres" onPress={() => { }} />
        <MenuCard title="Postres" onPress={() => { }} />
        <MenuCard title="Postres" onPress={() => { }} />
        <MenuCard title="Postres" onPress={() => { }} />
        <MenuCard title="Postres" onPress={() => { }} />
        <MenuCard title="Postres" onPress={() => { }} />
        <MenuCard title="Postres" onPress={() => { }} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#e0f7ff',
    flexGrow: 1
  }
});