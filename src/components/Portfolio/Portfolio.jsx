import React from 'react'
import "./Portfolio.scss"
import chat from "../../images/chat.png"
import job from "../../images/job.png"
import nft from "../../images/nft.png"
import portfolio from "../../images/portfolio.png"
export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>
                Port<span className="nunu">folio </span>
            </h1>
            <div className="container">
                    <a className="item" href="https://joblist-app.herokuapp.com">
                        <img src={job} alt="" />
                        <h3> Job Portal</h3>
                    </a>
                    <a className="item" href="https://chat-appt.herokuapp.com" >
                        <img src={chat} alt="" />
                        <h3>Chat App</h3>
                    </a>
                    <a className="item" href="https://ipfs.io/ipfs/QmR6bVPZBU25dnXJDsND8xRRqY9rjghAvU311JoNDgdDPN/?fxhash=ooCipHCrxhkPmLQ34XL62rt6rY2wAkXrWgevgdJpsWianvQ3FjZ">
                        <img src={nft} alt="" />
                        <h3>Generative NFT</h3>
                    </a>
                    <a className="item">
                        <img src={portfolio} alt=""/>
                        <h3> React App </h3>
                    </a>
            </div>
        </div>
    )
}
