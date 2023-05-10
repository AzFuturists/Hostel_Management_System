import { Card, CardHeader, CardTitle, CardContent } from "../../../../components/Card";
import { DateSelect, DateSelectContainer } from "../../../../components/DateSelect";
import { Bar } from "react-chartjs-2";

const OccupancyComponent = (props: any) => {
    return <Card>
        <CardHeader>
            <CardTitle>
                Occupancy Statistics
            </CardTitle>
            <DateSelectContainer>
                <DateSelect>
                    <option selected>&#128197; Monthly</option>
                    <option>&#128197; Weekly</option>
                    <option>&#128197; Yearly</option>
                </DateSelect>
            </DateSelectContainer>
        </CardHeader>
        <CardContent>
            <Bar height={230} width={1000} options={props.options} data={props.data} />;
        </CardContent>
    </Card>
}

export default OccupancyComponent;