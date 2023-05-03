import Occupancy from "../components/Occupancy";

const MainDashboard = () => {
    return <div style={{display: 'flex'}}>
        <div style={{width: '30vw'}}><Occupancy /></div>
        <div></div>
    </div>
};

export default MainDashboard;