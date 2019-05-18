import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import { Permissions } from 'expo';
import { storage } from '../providers/FirebaseProvider';
export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }
  alertIfRemoteNotificationsDisabledAsync=async()=> {
    const { Permissions } = Expo;
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Hey! You might want to enable notifications for my app, they are good.');
    }else{

        this._pickImage
    }
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.uploadImage(result.uri); 
    }
  };
  uploadImage = async(uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = storage.ref().child("abc.jpg");
    return ref.put(blob);
  }
}