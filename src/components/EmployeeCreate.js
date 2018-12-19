import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        label='name'
                        placeholder='Shota'
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label='phone'
                        placeholder='090-000-000'
                    />
                </CardSection>

                <CardSection>
                    
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

export default EmployeeCreate;