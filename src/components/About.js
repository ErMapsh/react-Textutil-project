import React, { useState } from "react";

export default function About() {

    //setting hooks
    const [btntext, setBtnText] = useState("Enable dark mode");
    const [mystyle, setmystyle] = useState({
        color: "black",
        background: "white"
    });

    const [button, newbutton] = useState("Enable Light mode");

    // event occur when toggle button
    const darkModeEnableDisable = () => {
        // console.log("darkModeEnable")
        if (mystyle.background === "white") {
            setmystyle({
                color: "white",
                background: "black",
                border: '1px solid white'
            })
            setBtnText("Enable Light mode");
            newbutton("Enable Dark mode")
        }
        else {
            setmystyle({
                color: "black",
                background: "white"
            })
            setBtnText("Enable Dark mode")
            newbutton("Enable Light mode")
        }
    }

    //we can also change mystyle, text in js
    // but i set back theme for accordion before setting new hoosk

    // mystyle_we_Can_set ={
    //     color: "white",
    //     background: "black"
    // }


    return (

        <div className="container my-4 " style={mystyle} >
            <h1 className="container my-2">About Us</h1>
            <div className="accordion" idname="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" idname="headingOne">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div idname="collapseOne" className="accordion-collapse collapse show" style={mystyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" idname="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" idname="headingThree">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary my-3" onClick={darkModeEnableDisable}>{btntext}</button>

            <div className="form-check form-switch" onClick={darkModeEnableDisable} >
                <input className="form-check-input" type="checkbox" role="switch" idname="flexSwitchCheckDefault" />
                <label className="form-check-label" forhtml="flexSwitchCheckDefault">{button}</label>
            </div>
        </div>
    );


}
