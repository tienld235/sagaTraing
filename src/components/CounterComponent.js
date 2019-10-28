import React, { Component } from 'react'
import {Text, View, Image, Alert, Platform, Button} from 'react-native';

export default class CounterComponent extends Component{
    render = () => (
        <View style={{ flex: 1 }}>
            <Text style={{ margin: 20, fontWeight: 'bold', color:'forestgreen', fontSize: 20 }}>
                Learn Redux Saga
            </Text>
            <View style={{ flexDirection: 'row'}}>
                <Button
                    title='Increase'
                    onPress={() => this.props.onIncrease(1)}
                />
               <Button
                    title='Decrease'
                    onPress={() => this.props.onDecrease(1)}
                />
            </View>
            <View>
                <Text>
                    Count: {this.props.count}
                </Text>
            </View>
        </View>
    )
}
