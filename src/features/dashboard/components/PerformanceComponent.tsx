import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card';
import { Line } from "react-chartjs-2";
import { DateSelect, DateSelectContainer } from '../../../components/DateSelect';

const PerformanceComponent = (props: any) => {
    return <Card>
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
            <Line options={props.options} data={props.data} />
        </CardContent>
    </Card>
}

export default PerformanceComponent;