import styled from 'styled-components';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/Card';

const CheckContainer = styled.div`
    border-right: 2px solid lightgrey;
    padding: 10px;
    display: flex;
    width: 29%;
    @media (max-width: 991px) {
        border-right: unset;
        width: 100%;
    }
    @media (max-width: 768px) {
        border-right: unset;
        width: 100%;
        padding: 0px;
        font-size: x-small;
    }
`;

const CheckInHeader = styled.span`
    color: grey;
`;

const ReservationTextContainer = styled.div`
    width: 30%;
    @media (max-width: 768px) {
        width: 50%;
    }
`;

const ReservationNumberContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const ReservationNumber = styled.span`
    color: blue;
    font-size: xx-large;
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: small;
    }
`;

const ReservationSpan = styled.span`
  display: block;
`;

const ReservationSummaryComponent = () => {
    return <Card>
        <CardHeader>
            <CardTitle>Reservation Summary</CardTitle>
        </CardHeader>  
        <CardContent style={{display: 'flex', flexWrap: 'wrap'}}>
                <CheckContainer>
                    <ReservationTextContainer>
                        <ReservationSpan><CheckInHeader>Today's</CheckInHeader></ReservationSpan>
                        <ReservationSpan>Check-in</ReservationSpan>
                    </ReservationTextContainer>
                    <ReservationNumberContainer>
                        <ReservationNumber>10</ReservationNumber>
                    </ReservationNumberContainer>
                </CheckContainer>
                <CheckContainer>
                    <ReservationTextContainer>
                        <ReservationSpan><CheckInHeader>Today's</CheckInHeader></ReservationSpan>
                        <ReservationSpan>Check-out</ReservationSpan>
                    </ReservationTextContainer>
                    <ReservationNumberContainer>
                        <ReservationNumber>25</ReservationNumber>
                    </ReservationNumberContainer>
                </CheckContainer>
                <CheckContainer style={{borderRight: 'unset'}}>
                    <ReservationTextContainer>
                        <ReservationSpan><CheckInHeader>Total</CheckInHeader></ReservationSpan>
                        <ReservationSpan>In hotel</ReservationSpan>
                    </ReservationTextContainer>
                    <ReservationNumberContainer>
                        <ReservationNumber>50</ReservationNumber>
                    </ReservationNumberContainer>
                </CheckContainer>
        </CardContent>
    </Card>
};

export default ReservationSummaryComponent;