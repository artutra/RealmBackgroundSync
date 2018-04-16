import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Realm from 'realm'

const SERVER_URL = '<YOUR_REALM_SERVER_URL>';
const USERNAME = '<YOUR_USERNAME>'
const PASSWORD = '<YOUR_PASSWORD>'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentWillMount() {
    let user = Realm.Sync.User.current
    if(user) {
      this.createRealm(user)
    } else {
      // Must have internet connection on the first login
      Realm.Sync.User.login(`https://${SERVER_URL}`, USERNAME, PASSWORD)
      .then(user => {
        this.createRealm(user)
      })
    }
  }
  createRealm(user) {
    const config = {
      sync: {
        user,
        url: `realms://${SERVER_URL}/~/private`,
        validate_ssl: false,
        error: (session, error) => {
          console.log(session)
          console.log(error)
        }
      },
      schema: [{name: 'Dog', properties: {name: 'string'}}]
    };
    realm = new Realm(config)
    this.setState({ realm });
  }

  _onPress(){
    var { realm } = this.state
    realm.write(() => { realm.create('Dog', {name: 'Rex'}) })
    this.forceUpdate()
  }
  
  render() {
    var { realm } = this.state
    const info = this.state.realm
      ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
      : 'Loading...';

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {info}
        </Text>
        <Button title="Press me" onPress={this._onPress.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
