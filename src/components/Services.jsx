import React from 'react'
import "./Services.css"

export default function Services() {
    return (
        <div className='service'>
            <h1>Hydrophonic Services</h1>
            <div className="services">
                <div>
                    <h2>Advantages of a hydroponic system</h2>
                    <ul>
                        <li>Higher productivity than the traditional farming system, the plant nutrients are effectively used, and there is no wastage.</li>
                        <li>The hydroponic system is a controlled climate system in which the crops can grow year-round.</li>
                        <li>Water utilization is low when compared to the traditional farming method, up to 80-90 percent lower.</li>
                        <li>The crops are grown in a closed space, which eliminates the attack of pests and insects.</li>
                    </ul>
                </div>
                <div className="div">
                    <img src="images/nft.webp" alt="nft" />
                    <p>VERTICAL NFT SYSTEM</p>
                </div>
                <div className="div">
                    <p>AEROPHONIC SYSTEM</p>
                    <img src="images/aeroponic.webp" alt="aerophonic" />
                </div>
                <div className="div">
                    <img src="images/nft2.webp" alt="nft2" />
                    <p>HORIZONTAL NFT SYSTEM</p>
                </div>
                <div className="div">
                    <p>INDOOR GROWING SYSTEM</p>
                    <img src="images/indor.webp" alt="indoor" />
                </div>
                <div className="div">
                    <img src="images/dwc.webp" alt="dwc" />
                    <p>DWC SYSTEM OR RAFT SYSTEM</p>
                </div>
                <div className="div">
                    <p>DUTCH BUCKET GROW SYSTEM</p>
                    <img src="images/bucket.webp" alt="dutch bucket" />
                </div>
                <div className="div">
                    <img src="images/zip.webp" alt="zip" />
                    <p>ZIP GROW SYSTEM</p>
                </div>
            </div>
        </div>
    )
}
