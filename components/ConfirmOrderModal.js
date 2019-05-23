import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Dialog, { DialogContent, DialogButton, DialogFooter } from 'react-native-popup-dialog'
import { Row, Col, Left, Right, Button, Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import t from 'tcomb-form-native';


const Form = t.form.Form;

const phone = t.struct({
  tableNo: t.Number,
});
const note = t.struct({
  note: t.maybe(t.String)
})

const options = {
  fields: {
    tableNo: {
      placeholder: 'Table no.',
      auto: 'placeholders',
      error: 'Please enter your table number',
    },

  },
}
const AsyncAlert = async () => new Promise((resolve) => {
  Alert.alert(
    'Alert',
    'Saved Successful',
    [
      {
        text: 'ok',
        onPress: () => {
          resolve('YES');
        },
      },
    ],
    { cancelable: false },
  );
});

export default class ConfirmOrderModal extends Component {

  renderDialog = () => {
    const { visible, type, selected, value } = this.props
    if (type === 'addToBasket') {
      return (
        <Dialog
          visible={visible}
          style={styles.modalDialog}
          onTouchOutside={() => {
            this.props.onClose();
          }}
          footer={
            <DialogFooter>
              <DialogButton
                text="Add to Basket"
                onPress={() => { this.props.onAdd(selected, value) }}
              />
            </DialogFooter>
          }
        >
          <DialogContent style={styles.modal}>
            <Row>
              <Col size={10}><Text>{selected.name} </Text></Col>
              <Col><Text>{selected.price} </Text></Col>
            </Row>
            <Row >
              <Left style={styles.buttonContainer}>
                <Button danger rounded onPress={this.props.decrease}>
                  <Icon name='remove' />
                </Button>
              </Left>
              <View style={styles.addTab}>
                <TextInput value={value} />
              </View>

              <Right style={styles.buttonContainer}>
                <Button success rounded onPress={this.props.increase}>
                  <Icon name='add' />
                </Button>
              </Right>
            </Row>
            <View style={styles.noteText}>
              <Text>Note (Optional) :</Text>
              <TextInput
                multiline={true}
                numberOfLines={3}
                editable={true}
                maxLength={40}
                style={styles.note}
                onChangeText={(text) => this.props.onChangeNote(text)}
              />
            </View>
          </DialogContent>
        </Dialog>

      )
    }
  }

  renderOrderModal = () => {
    const { visible } = this.props

    return (
      <Dialog
        visible={visible}
        style={styles.modalDialog}
        onTouchOutside={() => {
          this.props.onClose()
        }}
        footer={
          <DialogFooter>
            <DialogButton
              text="Confirm Order"
              onPress={() => { this.props.onSubmit(this.refs._form.getValue()) }}
            />
          </DialogFooter>
        }
      >
        <DialogContent style={styles.formModal}>
          <ScrollView>
            <Text style={styles.head}>Please enter your table no. :</Text>
            <Form
              ref="_form"
              type={phone}
              options={options}
            // value={this.state.value}
            />
          </ScrollView>
        </DialogContent>
      </Dialog>

    )
  }


  render() {
    const { type } = this.props
    return (
      type === 'addToBasket' ? this.renderDialog() : this.renderOrderModal()

    );
  }
}
const styles = StyleSheet.create({
  formModal: {
    height: 120,
    width: 350,
    padding: 20
  },
  modal: {
    padding: 20,
    height: 200,
    width: 300,
  },
  addTab: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginLeft: 30,
    marginRight: 30,
  },
  noteText: {
    alignItems: 'flex-start',
    marginTop: 20,

  },
  head: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  note: {
    height: 40,
    width: 260,
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 16,
    paddingLeft: 10,
  }
});