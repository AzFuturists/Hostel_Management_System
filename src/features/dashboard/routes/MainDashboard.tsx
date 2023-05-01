import ReservationSummary from "../components/ReservationSummary";

const MainDashboard = () => {
    return <div style={{display: 'flex'}}>
        <div style={{width: '25vw'}}><ReservationSummary /></div>
        <div></div>
    </div>
};

export default MainDashboard;