import React from 'react'
import "./Hydrophonic.css"

export default function Hydrophonic() {
    return (
        <div className='hydrophonic'>
            <div className="hydro">
                <div className="image">
                    <img src="images/home.jpg" alt="hydrophonic" />
                </div>
                <div className="hydrotext">
                    <div className="div">
                        <h2>What is hydroponics?</h2>
                        <p>New technologies are coming up every day in the world. As the world population is growing, the agriculture industry is also developing new techniques to grow food in lesser space and by saving water. The hydroponic growing system is a step towards this.</p>
                        <br />
                        <p>Hydroponic System is a system of growing crops without soil, often called soilless farming. In the hydroponic system, the plant roots grow in a liquid nutrient solution or inside the moist inert materials like Rockwool and Vermiculite. The liquid nutrient solution is a mixture of essential plant nutrients in the water.</p>
                        <br />
                        <p>The plant roots are suspended either in the static liquid solution or in a continuously flowing nutrient mixture. The hydroponic growing system requires continuous attention to the crops, unlike the traditional farming system.</p>
                    </div>
                    <div className="div">
                        <h2>How does hydroponics work?</h2>
                        <p>Hydroponic systems work by allowing minute control over environmental conditions like temperature and pH balance and maximized exposure to nutrients and water. Hydroponics operates under a very simple principle: provide plants exactly what they need when they need it. Hydroponics administer nutrient solutions tailored to the needs of the particular plant being grown. They allow you to control exactly how much light the plants receive and for how long. pH levels can be monitored and adjusted. In a highly customized and controlled environment, plant growth accelerates.</p>
                        <br />
                        <p>By controlling the environment of the plant, many risk factors are reduced. Plants grown in gardens and fields are introduced to a host of variables that negatively impact their health and growth. Fungus in the soil can spread diseases to plants. Wildlife like rabbits can plunder ripening vegetables from your garden. Pests like locusts can descend on crops and obliterate them in an afternoon. Hydroponic systems end the unpredictability of growing plants outdoors and in the earth. Without the mechanical resistance of the soil, seedlings can mature much faster. By eliminating pesticides, hydroponics produce much healthier and high-quality fruits and vegetables. Without obstacles, plants are free to grow vigorously and rapidly.</p>
                    </div>
                    <div className="div">
                        <h2>What are the components of a hydroponic system? </h2>
                        <ul>
                            <li>Growing media</li>
                            <li>Air stones and air pumps </li>
                            <li>Net pots </li>
                        </ul>
                    </div>
                    <div className="div">
                        <h2>What are the six types of hydroponic systems?</h2>
                        <ol>
                            <li>Aeroponics</li>
                            <li>Drip systems</li>
                            <li>Ebb and flow systems</li>
                            <li>Nutrient film technique systems</li>
                            <li>Wick systems </li>
                            <li>Deep water culture systems </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
