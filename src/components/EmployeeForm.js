import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions'; 
import { CardSection, Input } from './common'; 

class EmployeeForm extends Component {
    render() {

        const day = [
            'Monday', 
            'Tuesday', 
            'Wednesday', 
            'Thurthday', 
            'Friday', 
            'Saturday', 
            'Sunday'
        ];

        return(
            <View>
                <CardSection>
                    <Input 
                        label='name'
                        placeholder='Shota'
                        value={ this.props.value }
                        onChangeText={ text => this.props.employeeUpdate({ prop: 'name', text })}
                        
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label='phone'
                        placeholder='090-000-000'  
                        value={ this.props.value }                      
                        onChangeText={ text => this.props.employeeUpdate({ prop: 'phone', text })}
                    />
                </CardSection>

                <CardSection style = {{ flexDirection: 'column' }}>
                    <Text
                        style = {styles.pickerTextStyle}
                    >
                        Shift
                    </Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue = { this.props.shift }
                        onValueChange = { day => this.props.employeeUpdate({ prop: 'shift', day})}
                    >
                        {day.map((day) => { 
                            return <Picker.Item label = { day } value={ day } /> 
                        })}
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18, 
        paddingLeft: 20,
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);