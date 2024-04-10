import React from 'react';
import Timer from './Timer';

const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className='header bg-gray-800 text-white py-4 text-center text-3xl'>Workers Time Tracking</div>
            <div className='body flex-grow'>
                <Timer />
            </div>
            <div className='footer bg-gray-800 text-white py-4 text-center text-2xl'>&copy; 2024 Zerosec</div>
        </div>
    )
}

export default Dashboard;
