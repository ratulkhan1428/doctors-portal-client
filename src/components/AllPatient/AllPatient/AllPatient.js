import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../DashBoard/AppointmentDataTable/AppointmentDataTable';
import SideBar from '../../DashBoard/SideBar/SideBar';

const AllPatient = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-taiga-27768.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <SideBar></SideBar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllPatient;