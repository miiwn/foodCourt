import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Dialog, { DialogContent, DialogButton, DialogFooter } from 'react-native-popup-dialog'
import { Row, Col, Left, Right, Button, Icon } from 'native-base';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import t from 'tcomb-form-native' ;


const Form = t.form.Form ;

const phone = t.struct({
   name: t.String,
   phone: t.String,
   table: t.Number,
//    createDate: t.String,
//    updateDate: t.String
}) ;

const options ={
	fields: {
		createDate:{
			editable: false
		},
		updateDate: {
			editable: false,
		}
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
    renderDialog =()=>{
      const {visible, type, selected ,value  }=this.props
        if(type==='addToBasket'){
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
                </DialogContent>
              </Dialog>

)
        }
    }

    renderOrderModal=()=>{
      const {visible }=this.props

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
                  onPress={() => { this.props.onAdd(selected, value) }}
                />
              </DialogFooter>
            }
          >
            <DialogContent style={styles.formModal}>
            <ScrollView>
               <Left>
                 <Text>Hamburger</Text>
                 <Text>x 3</Text>
                 </Left> 
                 <Right>
                 <Text>55</Text></Right>
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
    const {type}=this.props
    return (
        type==='addToBasket'?this.renderDialog():this.renderOrderModal()
       
    );
  }
}
const styles = StyleSheet.create({
    formModal:{
        height: 300,
        width: 350,
    },
    modal: {
        padding: 20,
        height: 140,
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
});