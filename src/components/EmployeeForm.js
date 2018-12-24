import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions'; 
import { CardSection, Input } from './common'; 

class EmployeeForm extends Component {
    render() {

        const days = [
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
                        value={ this.props.name }
                        onChangeText={ value => this.props.employeeUpdate({ prop: 'name', value })}
                        
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label='phone'
                        placeholder='090-000-000'  
                        value={ this.props.phone }                      
                        onChangeText={ value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection style = {{ flexDirection: 'column' }}>
                    <Text
                        style = {styles.pickerTextStyle}
                    >
                        Shift
                    </Text>
                    <Picker
                        // style={{ flex: 1 }}
                        selectedValue = { this.props.shift }
                        onValueChange = { value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        {days.map((day) => { 
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