import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/Card';
import { Line } from "react-chartjs-2";
import { DateSelect, DateSelectContainer } from '../../../../components/DateSelect';
import styles from './Performance.module.css';

const PerformanceComponent = (props: any) => {
    return <Card style={{height: '100%', width: '100%'}}>
        <CardHeader>
            <CardTitle>Performance</CardTitle>
            <DateSelectContainer>
                <DateSelect>
                    <option selected>&#128197; Monthly</option>
                    <option>&#128197; Weekly</option>
                    <option>&#128197; Yearly</option>
                </DateSelect>
            </DateSelectContainer>
        </CardHeader>
        <CardContent>
            <Line width={1000} height={250} options={props.options} data={props.data} />
        </CardContent>
    </Card>
}

export default PerformanceComponent;