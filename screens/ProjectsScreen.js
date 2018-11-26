import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import ProjectSection from '../components/ProjectSection';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const mockProjectsData = {
      "projects": [
        {
          "challenges": [
            {
              "challenge_name": "Best \"Light the Way\" Hack",
              "company": "Technica",
              "won": false
            },
            {
              "challenge_name": "Best Hack for Social Good",
              "company": "JP Morgan Chase",
              "won": false
            },
            {
              "challenge_name": "Best Social Good Hack",
              "company": "MLH",
              "won": false
            },
            {
              "challenge_name": "Best Overall Hack",
              "company": "Facebook",
              "won": false
            },
            {
              "challenge_name": "Best First Time Hack",
              "company": "Technica",
              "won": false
            }
          ],
          "challenges_won": [],
          "project_id": "5be8531e5e0ea41038a4f16e",
          "project_name": "women emPOWERed",
          "project_description": "Click through a timeline of women's contributions to STEM and use it as an inspiration to light your own way.",
          "project_url": "https://technica2018.devpost.com/submissions/105731-women-empowered",
          "table_number": "B4"
        },
        {
          "challenges": [
            {
              "challenge_name": "Best Accessibility Hack",
              "company": "Brightspot",
              "won": false
            },
            {
              "challenge_name": "Best Computer Vision / AI System",
              "company": "Altamira",
              "won": false
            },
            {
              "challenge_name": "Best \"Light the Way\" Hack",
              "company": "Technica",
              "won": false
            },
            {
              "challenge_name": "Best use of Google Cloud Platform",
              "company": "MLH",
              "won": true
            },
            {
              "challenge_name": "Best Use of a Data Set",
              "company": "Ebay",
              "won": false
            },
            {
              "challenge_name": "Best use of Data Visualization",
              "company": "Qualtrics",
              "won": false
            },
            {
              "challenge_name": "Best use of Machine Learning",
              "company": "Booz Allen Hamilton",
              "won": true
            },
            {
              "challenge_name": "Best Hack for Community Building",
              "company": "Nextdoor",
              "won": false
            },
            {
              "challenge_name": "Best Social Good Hack",
              "company": "MLH",
              "won": false
            },
            {
              "challenge_name": "Best Overall Hack",
              "company": "Facebook",
              "won": false
            },
            {
              "challenge_name": "Best First Time Hack",
              "company": "Technica",
              "won": false
            }
          ],
          "challenges_won": [
            "BoozAllenHamilton_challenge20181111055811",
            "MLH_challenge20181111060524"
          ],
          "project_id": "5be8531e5e0ea41038a4f168",
          "project_name": "Recyclicat",
          "project_description": "Scans pictures of trash items and helps the user classify them as recyclable or non-recyclable.",
          "project_url": "https://technica2018.devpost.com/submissions/105953-recyclicat",
          "table_number": "H1"
        },
        {
          "challenges": [
            {
              "challenge_name": "Best use of Data Visualization",
              "company": "Qualtrics",
              "won": false
            },
            {
              "challenge_name": "Best First Time Hack",
              "company": "Technica",
              "won": false
            }
          ],
          "challenges_won": [],
          "project_id": "5be8531e5e0ea41038a4f173",
          "project_name": "'Crunch'ing the Numbers for College Fitness",
          "project_description": "A survey-based data analysis about the qualitative and quantitative aspects of college student's fitness routines.",
          "project_url": "https://technica2018.devpost.com/submissions/105782-crunch-ing-the-numbers-for-college-fitness",
          "table_number": "C1"
        },
      ],
    };
    const colors = ["#FF7BAC", "#B6A1C7", "#17E3E3"];
    let i = 0;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Image
              resizeMode="contain"
              source={require('../assets/images/technica-logo.png')}
              style={styles.logoImage}
            />
          </View>

          <View style={styles.projectsContainer}>
            {mockProjectsData.projects.map(project => {
              color = colors[i%3];
              i++;
              return <ProjectSection key={project.project_id} project={project} color={color} />;
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f2f2f',
  },
  contentContainer: {
    paddingTop: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  logoImage: {
    width: 250,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  projectsContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
});
