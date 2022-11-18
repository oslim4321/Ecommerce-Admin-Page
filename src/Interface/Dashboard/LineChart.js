import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PublicRequest, UserRequest } from '../../Request';
// import UserRequest from '../../../../src/Client/RequestMethod'
const data = [
    { name: 'jan', 'ActiveUsers': 4000 },
    { name: 'Feb', 'ActiveUsers': 3000 },
    { name: 'Mar', 'ActiveUsers': 2000 },
    { name: 'Apr', 'ActiveUsers': 2000 },
    { name: 'May', 'ActiveUsers': 1890 },
    { name: 'June', 'ActiveUsers': 2390 },
    { name: 'July', 'ActiveUsers': 3490 },
    { name: 'Aug', 'ActiveUsers': 1000 },
    { name: 'Sep', 'ActiveUsers': 20 },
    { name: 'Oct', 'ActiveUsers': 50 },
    { name: 'Nov', 'ActiveUsers': 1000 },
    { name: 'Dec', 'ActiveUsers': 900 },
];



export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/line-chart-connect-nulls-sqp96';

    render() {
        <h1>User creating acccount every month</h1>
        return (
            <div style={{ width: '100%' }}>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                        width={500}
                        height={200}
                        data={this.props.userData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line connectNulls type="monotone" dataKey="ActiveUsers" stroke="#8884d8" fill="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
