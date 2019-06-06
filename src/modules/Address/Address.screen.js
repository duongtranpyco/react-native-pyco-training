import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { IMAGES } from '../../assets';

import styles from './Address.screen.styles';

class AddressScreen extends Component {

  constructor(props) {
    super(props);

    this.savedAddresses = [
      {
        icon: '',
        title: 'Office',
        address: 'BDlive24,Road 8 Niketon, gulshan, 1000'
      },
      {
        icon: '',
        title: 'Home ',
        address: 'BDlive24,Road 8 Niketon, gulshan, 1000'
      }
    ];

    this.nearbyData = [
      {
        image: '',
        title: 'Grandiose Restaurant',
        address: 'Airport Road Khilkhet,1229'
      },
      {
        image: '',
        title: 'Grandiose Restaurant 123',
        address: 'Airport Road Khilkhet,1229'
      }
    ];

    this.friendNearbyData = [
      {
        avatar: '',
        firstName: 'Smirk',
        lastName: 'Dhanmondi',
        age: 32
      }
    ];
  }

  renderSavedAddressesSection = () => {
    return (
      <View>
        <Text style={styles.savedAddressTitle}>
          Where would you like to go !
        </Text>
        {this.savedAddresses.map(item => (
          <View style={styles.savedAddressesItemContainer} key={item.title}>
            <Image style={styles.savedAddressesItemIcon} source={IMAGES.arrowRight}/>
            <View>
              <Text style={styles.savedAddressesItemTitle}>
                {item.title}
              </Text>
              <Text style={styles.savedAddressesItemAddress}>
                {item.address}
              </Text>
            </View>

          </View>
        ))}
      </View>
    );
  };

  renderNearBySection = () => {
    return (
      <View>
        <Text>
          Nearby Restaurants
        </Text>

        <FlatList
          horizontal
          data={this.nearbyData}
          renderItem={this.renderNearByItem}
          keyExtractor={(item) => item.title}
        />
      </View>
    );
  };

  renderNearByItem = ({ item }) => {
    return (
      <View
        style={{ width: 200, height: 100, backgroundColor: 'green', marginRight: 10 }}
      >
        <Text>
          {item.title}
        </Text>
        <Text>
          {item.address}
        </Text>
      </View>);
  };

  renderFriendNearBySection = () => {
    return (
      <View>
        <Text>
          Friend nearby you
        </Text>

        <FlatList
          horizontal
          data={this.friendNearbyData}
          renderItem={this.renderFriendNearByItem}
          keyExtractor={(item) => item.firstName}
        />
      </View>
    );
  };

  renderFriendNearByItem = ({ item }) => {
    return (
      <View
        style={{ width: 200, height: 100, backgroundColor: 'green', marginRight: 10 }}
      >
        <Text>
          {item.firstName}
        </Text>
        <Text>
          {`${item.lastName} ${item.age}`}
        </Text>
      </View>);
  };

  render() {

    return (
      <View style={styles.container}>
        {this.renderSavedAddressesSection()}
        {this.renderNearBySection()}
        {this.renderFriendNearBySection()}

      </View>
    );
  }
}

export default AddressScreen;