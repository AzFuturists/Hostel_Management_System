import { Card, CardContent, CardTitle } from '../../../components/Card';
import { Line } from "react-chartjs-2";

const PerformanceComponent = (props: any) => {
    return <Card>
        <CardTitle>Hostel Performance</CardTitle>
        <CardContent>
            <Line options={props.options} data={props.data} />
        </CardContent>
    </Card>
}

export default PerformanceComponent;