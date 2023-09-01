import React, { useEffect, useState } from 'react';


export default function Header() {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        setCurrentDate(date.toLocaleDateString());
    }, []);


    return (
        <div className="containerHeader">


            <div className="background-data">
                <div className="data">
                    <p>{currentDate}</p>
                </div>
            </div>

        </div>
    )
}