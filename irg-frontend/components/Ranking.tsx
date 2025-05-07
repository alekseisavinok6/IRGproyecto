import { View, Text, StyleSheet } from 'react-native';

type RankingProps = {
    score: number;
};

export default function Ranking({ score }: RankingProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ranking</Text>
            <Text style={styles.score}>{score} ⭐</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        padding: 12,
        backgroundColor: '#00d4ff',
        borderRadius: 10
    },
    title: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Playfair'
    },
    score: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000'
    }
});