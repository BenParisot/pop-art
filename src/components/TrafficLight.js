import React, { useState } from 'react';
import './TrafficLight.css';

export default function TrafficLight() {
    const [colors, setColors] = useState({
        red: 'light red',
        yellow: 'light',
        green: 'light'
    });

    const updateColor = () => {
        if(colors.red === 'light red') {
            setColors({
                red: 'light',
                yellow: 'light yellow',
                green: 'light'
            })
        }
        if (colors.yellow === 'light yellow') {
            setColors({
                red: 'light',
                yellow: 'light',
                green: 'light green'
            })
        }
        if (colors.green === 'light green') {
            setColors({
                red: 'light red',
                yellow: 'light',
                green: 'light'
            })
        }
    }
    const changeColor = () => setTimeout(updateColor, 2000);

    changeColor();

    return (
        <div className="wrapper">
            <h1>Ben's Magic Stop Light</h1>
            <div className="light-container">
                <div className={colors.red}></div>
                <div className={colors.yellow}></div>
                <div className={colors.green}></div>
            </div>
        </div>
    )
}
