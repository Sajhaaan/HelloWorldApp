import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

class App extends Component {
  state = {
    contentScript: null // You can initialize your content script here
  };

  receiveMessage = (event) => {
    // Handle messages received from WebView here
    console.log('Received message:', event.nativeEvent.data);
  };

  render() {
    const websiteURL = 'https://monkthreads.shop';

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <WebView
          source={{ uri: websiteURL }}
          style={styles.webview}
          injectedJavaScript={this.state.contentScript}
          domStorageEnabled={true}
          startInLoadingState={true}
          onMessage={this.receiveMessage}
          ref={(ref) => (this.webview = ref)}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});

export default App;
