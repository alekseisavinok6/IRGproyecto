import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type MenuCardProps = {
    title: string;
    onPress: () => void;
};

export default function MenuCard({ title, onPress }: MenuCardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginVertical: 8,
        width: '100%',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4
    },
    title: {
        fontSize: 18,
        fontFamily: 'Inter',
        color: '#333'
    }
});