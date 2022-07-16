import React from 'react'
import "./Home.css"

export default function Home() {
    return (
        <div className='homepage'>
            <div className="body">
                <h1>Hydroponic Farming System in India</h1>
                <div className="section1">
                    <img src="images/home.webp" alt="farm" />
                </div>
                <div className="texts">
                    <div className="part">
                        <h2>What is Farm Automation in Agriculture?</h2>
                        <p>The process of utilizing various technological innovations to upgrade and automate the many processes of farming is known as farm automation. This technique is meant to ease the labor and time-intensive processes of agriculture that challenge farmers around the world. With the help of farm automated farming and agricultural technology innovations, farmers can acquire more time and resources to redirect into their properties.</p>
                    </div>
                    <div className="part">
                        <h2>The Different Technologies in Farm Automation</h2>
                        <p>Over the last few years, various novel pieces of technology have emerged in order to assist farmers with their activities. We discuss the most noteworthy technologies related to agriculture automation in this section.</p>
                        <br />
                        <p>Over the last few years, various novel pieces of technology have emerged in order to assist farmers with their activities. We discuss the most noteworthy technologies related to agriculture automation in this section.</p>
                    </div>
                    <div className="part">
                        <h2>AI Greenhouses</h2>
                        <div className="part2">
                            <img src="images/greenhouse.jpeg" alt="greenhouse" />
                            <div className="details">
                                <p>It is critical to have appropriate and desirable conditions within the greenhouse. Maintaining constant temperature inside the greenhouse looks like a task AI can do successfully. AI can automate the greenhouse temperature, which can then subsequently be regulated on a software solution. Depending on the crops being grown, smart farmers can equip themselves to modulate the greenhouse environment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="part">
                        <h2>Plant nutrients</h2>
                        <div className="part2">
                            <img src="images/plant.jpeg" alt="plant" />
                            <div className="details">
                                <p>Plants cannot properly function without 17 essential nutrients. These nutrients are needed so that processes critical to plant growth and development can occur. For example, magnesium is a critical component of chlorophyll. Chlorophyll is a pigment used to capture energy from light that is needed in photosynthesis. It also reflects green wavelengths and is the reason most plants are green. Magnesium is the center of the chlorophyll molecule. Table 1 lists the plant roles of essential nutrients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="part">
                        <h2>Seed profiling</h2>
                        <div className="part2">
                            <img src="images/seed.jpeg" alt="seed" />
                            <div className="details">
                                <p>Germination is key to growing plants in a Hydroponics farm. Germination is typically carried out on special soil-like Coco peat (coconut husk). Once the seeds germinate and reach a desirable height, they are re-potted into a vertical soilless setup. In this stage, AI can be delegated to perform seed profiling to determine the best germination rate for different plants.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
