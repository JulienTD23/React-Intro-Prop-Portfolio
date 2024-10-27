import { useState, useEffect } from 'react'
import './WebpageRate.css';

function WebpageRate( {iconSrc, title, rateContent, thanksContent, bgcolor} ) {

    const [value, setValue] = useState("bob");

    useEffect(() => {
        const rate = document.querySelectorAll(".rating");
        const sub = document.getElementById("submit");
        const state1 = document.getElementById("rate-state");
        const state2 = document.getElementById("thank-state");

        let place = document.getElementById("place");

        rate.forEach(rating => {
            rating.addEventListener("click", function() {
            rate.forEach((r) => r.classList.remove("selected"));
                this.classList.add("selected");
                setValue(this.textContent);
            })
        })

        sub.addEventListener("click", function() {
        if(value === "") {
            alert("Please enter a rating!");
        } else {
            state1.classList.add("hidden");
            state2.classList.remove("hidden");
            place.textContent = value;
        }
      }) 
    }, [value]);

    return(
        <div className="webpage-rate" style={{backgroundColor: bgcolor}}>
            <div id="rate-state">
                <div id="icon-outer"> <img id='icon-inner' src={iconSrc}></img> </div>
                
                <h1>{title}</h1>
                <p>{rateContent}</p>
                <ul>
                    <li class="rating">1</li>
                    <li class="rating">2</li>
                    <li class="rating">3</li>
                    <li class="rating">4</li>
                    <li class="rating">5</li>
                </ul>
                <br></br>
                <button id="submit">Submit</button>
            </div>

            <div id="thank-state" class="hidden">
                <img src="/illustration-thank-you.svg"></img>
                
                <br></br>
                <div id='rate-box'>
                    <div id="content">
                        <p>You selected </p> 
                        <p id="place">X</p> 
                        <p> out of 5</p>
                    </div>
                </div>
                <br></br>
                <h1>Thank you!</h1>
                <p>{thanksContent}</p>            

            </div>
        </div>
    );
}

export default WebpageRate;