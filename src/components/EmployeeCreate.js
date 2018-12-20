import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    render() {

        const day = [
            'Monday', 
            'Tuesday', 
            'Wednesday', 
            'Thurthday', 
            'Friday', 
            'Saturday', 
            'Sunday'
        ]

        return(
            <Card>
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
                        onChangeText={ value => this.props.mployeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection>
                    <Text>Shift</Text>
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
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);