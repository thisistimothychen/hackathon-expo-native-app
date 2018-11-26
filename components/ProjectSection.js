import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { bold } from 'ansi-colors';

export default class ProjectSection extends React.Component {
    render() {
        const { project: { project_name, project_description, table_number, challenges } } = this.props;
        return (
            <View style={styles.projectContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.mainProjectInfoContainer}>
                        <View style={styles.tableNumberContainer}>
                            <Text style={styles.tableNumber}>{table_number}</Text>
                        </View>
                        <View style={styles.projectDetailsContainer}>
                            <Text style={styles.projectNameText}>{project_name}</Text>
                            <Text style={styles.projectDescriptionText}>{project_description}</Text>
                        </View>
                    </View>

                    {challenges.map(({ challenge_name, company, won }) => (
                        <Text
                            key={`${challenge_name}-${company}`}
                            style={styles.challengeText}
                        >
                            {challenge_name} | {company}
                        </Text>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    projectContainer: {
        backgroundColor: '#666666',
        borderRadius: 7,
        width: Dimensions.get('window').width - 50,
        flex: 1,
        marginBottom: 20,
    },
    innerContainer: {
        margin: 20,
    },
    mainProjectInfoContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    tableNumberContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        maxWidth: 70,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#FF7BAC',
        marginRight: 15,
    },
    projectDetailsContainer: {
        flex: 1,
        flexShrink: 1,
    },
    tableNumber: {
        fontSize: 35,
        fontWeight: "bold",
        color: '#FFFFFF',
        padding: 10,
        textAlign: "center",
    },
    projectNameText: {
        fontSize: 15,
        fontWeight: "bold",
        color: '#FFFFFF',
        lineHeight: 24,
        textAlign: 'left',
    },
    projectDescriptionText: {
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'left',
    },
    challengeText: {
        fontSize: 15,
        color: '#CCCCCC',
        textAlign: 'center',
    },
});
