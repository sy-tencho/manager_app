import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

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
            <Card>
                <CardSection>
                    <Input 
                        label='name'
                        placeholder='Shota'
                        onChangeText={ value => this.props.employeeUpdate({ prop: 'name', value })}
                        value={ this.props.value }
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label='phone'
                        placeholder='090-000-000'                        
                        onChangeText={ value => this.props.employeeUpdate({ prop: 'phone', value })}
                        value={ this.props.value }
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
                
                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                    >
                        Create
                    </Button>
                </CardSection>
            </Card>
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

export default connect(mapStateToProps, { 
    employeeUpdate, employeeCreate 
})(EmployeeCreate);