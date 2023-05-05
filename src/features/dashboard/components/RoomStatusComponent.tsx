import { Card, CardContent, CardHeader, CardTitle } from "../../../components/Card";
import styled from "styled-components";

const RoomDetailsTable = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    padding: 10px;
`;

const RoomDetailsHeader = styled.div`
    display: flex;
    width: 200px;
    color: blue;
    padding: 5px;
`;

const RoomDetailsRow = styled.div`
    display: flex;
    width: 200px;
    padding: 5px;
`;

const RoomDetailTitle = styled.div`
    flex-grow: 4;
`;

const RoomDetailNumber = styled.div`
`;

const RoomStatusComponent = (props: any) => {
    return <Card>
        <CardHeader>
            <CardHeader>
                <CardTitle>
                    Room status
                </CardTitle>
            </CardHeader>
        </CardHeader>
        <CardContent>
            <RoomDetailsTable>
                <RoomDetailsHeader>
                    <RoomDetailTitle>Occupied rooms</RoomDetailTitle>
                    <RoomDetailNumber>104</RoomDetailNumber>
                </RoomDetailsHeader>
                <RoomDetailsRow>
                    <RoomDetailTitle>Clean</RoomDetailTitle>
                    <RoomDetailNumber>10</RoomDetailNumber>
                </RoomDetailsRow>
                <RoomDetailsRow>
                    <RoomDetailTitle>Dirty</RoomDetailTitle>
                    <RoomDetailNumber>10</RoomDetailNumber>
                </RoomDetailsRow>
                <RoomDetailsRow>
                    <RoomDetailTitle>Inspected</RoomDetailTitle>
                    <RoomDetailNumber>15</RoomDetailNumber>
                </RoomDetailsRow>
                <RoomDetailsHeader>
                    <RoomDetailTitle>Available rooms</RoomDetailTitle>
                    <RoomDetailNumber>49</RoomDetailNumber>
                </RoomDetailsHeader>
                <RoomDetailsRow>
                    <RoomDetailTitle>Clean</RoomDetailTitle>
                    <RoomDetailNumber>10</RoomDetailNumber>
                </RoomDetailsRow>
                <RoomDetailsRow>
                    <RoomDetailTitle>Dirty</RoomDetailTitle>
                    <RoomDetailNumber>19</RoomDetailNumber>
                </RoomDetailsRow>
                <RoomDetailsRow>
                    <RoomDetailTitle>Inspected</RoomDetailTitle>
                    <RoomDetailNumber>30</RoomDetailNumber>
                </RoomDetailsRow>
            </RoomDetailsTable>
        </CardContent>
    </Card>
}

export default RoomStatusComponent;

