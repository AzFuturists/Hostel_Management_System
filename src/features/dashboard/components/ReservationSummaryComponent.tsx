import styled from 'styled-components';

const Card = styled.div`
    width: auto;
    height: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
`;

const CardTitle = styled.span`
    font-size: medium;
    font-weight: bold;
`;

const CardContent = styled.div`
    padding: 5px;
`;

const CheckContainer = styled.div`
    border-right: 2px solid lightgrey;
    padding: 10px;
    display: flex;
`;

const CheckInHeader = styled.span`
    color: grey;
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
`;

const ReservationSpan = styled.span`
  display: block;
`;

const ReservationSummaryComponent = () => {
    return <Card>
        <CardTitle>Reservation Summary</CardTitle>
        <CardContent style={{display: 'flex', flexWrap: 'wrap'}}>
                <CheckContainer>
                    <div>
                        <ReservationSpan><CheckInHeader>Today's</CheckInHeader></ReservationSpan>
                        <ReservationSpan>Check-in</ReservationSpan>
                    </div>
                    <ReservationNumberContainer>
                        <ReservationNumber>10</ReservationNumber>
                    </ReservationNumberContainer>
                </CheckContainer>
                <CheckContainer>
                    <div>
                        <ReservationSpan><CheckInHeader>Today's</CheckInHeader></ReservationSpan>
                        <ReservationSpan>Check-out</ReservationSpan>
                    </div>
                    <ReservationNumberContainer>
                        <ReservationNumber>25</ReservationNumber>
                    </ReservationNumberContainer>
                </CheckContainer>
                <CheckContainer style={{borderRight: 'unset'}}>
                    <div>
                        <ReservationSpan><CheckInHeader>Total</CheckInHeader></ReservationSpan>
                        <ReservationSpan>In hotel</ReservationSpan>
                    </div>
                    <ReservationNumberContainer>
                        <ReservationNumber>50</ReservationNumber>
                    </ReservationNumberContainer>
                </CheckContainer>
        </CardContent>
    </Card>
};

export default ReservationSummaryComponent;