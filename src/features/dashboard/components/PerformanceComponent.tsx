import styled from 'styled-components';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card';
import { Line } from "react-chartjs-2";

const DateSelectContainer = styled.div`
    width: 120px;
    height: 25px;
    margin-left: auto;
`;

const DateSelect = styled.select`
    width: 100%;
    height: 100%;
    border: 2px solid deepskyblue;
    border-radius: 5px;
    color: deepskyblue;
    &::selection {
        background-color: deepskyblue;
    }
`;

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