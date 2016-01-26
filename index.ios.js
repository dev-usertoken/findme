var React = require('react-native');

// Make react global
window.React = React;

var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;

var Login = require('./components/Login');
var LoginMock = require('./components/LoginMock');
var MapGl = require('./components/MapGl');

var AppEntry = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        itemWrapperStyle={styles.allPages}
        initialRoute={{
          component: MapGl,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  allPages: {
    backgroundColor: '#EEE',
  },
});

AppRegistry.registerComponent('findme', () => AppEntry);

module.exports = AppEntry;
