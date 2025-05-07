import { View, Text, StyleSheet, Image } from 'react-native';

type HeaderProps = {
    restaurantName: string;
};

export default function Header({ restaurantName }: HeaderProps) {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.name}>{restaurantName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#000', 
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 8
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Playfair'
    }
});