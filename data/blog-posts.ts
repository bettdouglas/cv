import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    slug: "building-offline-first-flutter-apps",
    title: "Building Offline-First Flutter Applications",
    description: "Learn how to implement robust offline capabilities in Flutter apps using SQLite and state management",
    content: `# Building Offline-First Flutter Applications

When developing mobile applications for regions with unreliable internet connectivity, implementing offline capabilities becomes crucial. Here's how I approached this challenge at Crop Nutrition Laboratories...

## Key Implementation Steps

1. Local data persistence using SQLite
2. Sync queue management
3. Conflict resolution strategies
4. Background sync implementation`,
    publishDate: "2024-01-15",
    tags: ["Flutter", "Mobile Development", "Offline-First", "SQLite"],
    coverImage: '/placeholder.svg?height=400&width=600'
  },
  {
    slug: "grpc-vs-rest-apis-dart",
    title: "gRPC vs REST APIs in Dart: A Practical Comparison",
    description: "A detailed comparison of gRPC and REST APIs in Dart, based on real-world production experience.",
    content: `# gRPC vs REST APIs in Dart

Based on my experience developing both gRPC and REST APIs for production applications, here's a detailed comparison...

## Performance Comparisons
## Use Case Scenarios
## Implementation Considerations`,
    publishDate: "2024-02-01",
    tags: ["gRPC", "Dart", "Backend Development", "API Design"],
    coverImage: '/placeholder.svg?height=400&width=600'
  },
  {
    slug: "geospatial-analysis-flutter",
    title: "Implementing Geospatial Analysis in Flutter Applications",
    description: "Learn how to build location-aware Flutter applications using geospatial analysis techniques.",
    content: `# Geospatial Analysis in Flutter

Combining my GeoInformatics background with Flutter development to create location-aware applications...

## Core Concepts
## Data Structures
## Visualization Techniques`,
    publishDate: "2024-03-10",
    tags: ["Flutter", "GIS", "Geospatial", "Mobile Development"],
    coverImage: '/placeholder.svg?height=400&width=600'
  },
  {
    slug: "ci-cd-flutter-apps",
    title: "CI/CD Pipeline for Flutter Applications",
    description: "A comprehensive guide to setting up a CI/CD pipeline for your Flutter projects using GitHub Actions.",
    content: `# CI/CD Pipeline for Flutter Apps

A detailed walkthrough of implementing continuous integration and deployment for Flutter applications...

## Pipeline Configuration
## Test Automation
## Release Management`,
    publishDate: "2024-03-25",
    tags: ["Flutter", "DevOps", "CI/CD", "GitHub Actions"],
    coverImage: '/placeholder.svg?height=400&width=600'
  },
  {
    slug: "introduction-to-geospatial-analysis",
    title: "Introduction to Geospatial Analysis with Python",
    description: "Learn the fundamentals of geospatial analysis using Python libraries like GeoPandas, Shapely, and Folium.",
    content: `
# Introduction to Geospatial Analysis with Python

Geospatial analysis is a powerful tool for understanding and visualizing geographic data. In this post, we'll explore the basics of geospatial analysis using Python.

## What is Geospatial Analysis?

Geospatial analysis involves analyzing and interpreting data that has a geographic component. This can include things like:

- Mapping locations
- Analyzing spatial patterns
- Calculating distances and areas
- Identifying clusters or hotspots

## Key Python Libraries for Geospatial Analysis

1. **GeoPandas**: An extension of pandas for working with geospatial data.
2. **Shapely**: For manipulation and analysis of planar geometric objects.
3. **Folium**: For creating interactive maps.
4. **Rasterio**: For reading and writing geospatial raster data.

## A Simple Example

Here's a basic example of how to create a map using GeoPandas:

\`\`\`python
import geopandas as gpd
import matplotlib.pyplot as plt

# Read a shapefile
world = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))

# Plot the map
world.plot()
plt.title('World Map')
plt.show()
\`\`\`

This code will create a simple world map using the natural earth dataset.

## Conclusion

Geospatial analysis with Python opens up a world of possibilities for understanding and visualizing geographic data. Whether you're analyzing urban development patterns, tracking wildlife movements, or planning logistics routes, these tools can provide valuable insights.

Stay tuned for more in-depth tutorials on geospatial analysis!
    `,
    publishDate: '2023-06-15',
    tags: ['Python', 'Geospatial', 'Data Analysis'],
    coverImage: '/placeholder.svg?height=400&width=600'
  },
  {
    slug: "flutter-vs-react-native",
    title: "Flutter vs React Native: Choosing the Right Mobile Development Framework",
    description: "A comprehensive comparison of Flutter and React Native, helping you choose the best framework for your cross-platform mobile app.",
    content: `
# Flutter vs React Native: Choosing the Right Mobile Development Framework

When it comes to cross-platform mobile development, two frameworks stand out: Flutter and React Native. Both have their strengths and weaknesses, and choosing between them can be challenging. In this post, we'll compare these two popular frameworks to help you make an informed decision.

## Flutter

Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.

### Pros:
- Fast performance with the Dart programming language
- Rich set of customizable widgets
- Hot reload for quick development
- Growing community and ecosystem

### Cons:
- Steeper learning curve if you're not familiar with Dart
- Larger app size compared to React Native

## React Native

React Native is a framework developed by Facebook that allows you to build mobile apps using JavaScript and React.

### Pros:
- Uses JavaScript, which many developers are already familiar with
- Large community and extensive third-party libraries
- Can integrate with native modules easily
- Smaller app size compared to Flutter

### Cons:
- Performance can be slower than Flutter for complex animations
- Inconsistent behavior across different devices

## Code Comparison

Let's look at a simple "Hello World" example in both frameworks:

Flutter:

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: Text('Hello World'),
        ),
      ),
    );
  }
}
\`\`\`

React Native:

\`\`\`jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
\`\`\`

## Conclusion

Both Flutter and React Native are excellent choices for cross-platform mobile development. The choice between them often comes down to your team's expertise, project requirements, and personal preference. Flutter might be better for apps requiring complex UI and animations, while React Native could be preferable if you're already familiar with React and JavaScript.

Ultimately, the best way to decide is to try both and see which one feels more comfortable and productive for your specific needs.
    `,
    publishDate: '2023-07-01',
    tags: ['Flutter', 'React Native', 'Mobile Development'],
    coverImage: '/placeholder.svg?height=400&width=600'
  }
];

