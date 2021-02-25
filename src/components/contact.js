import React, {useState} from "react";
import {navigate} from "gatsby";
import '../styles/components/contact.module.scss';

function encode(data) {
    return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
}

const ContactPage = () => {

    const [fullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [enquiry, setType] = useState("Other");
    const [message, setMessage] = useState("");

    function handleChangeName(e) {
        if ( e.target.value ) {
            setName({ ...fullName, [e.target.name]: e.target.value });
        }
    }
    function handleChangeEmail(e) {
        if ( e.target.value ) {
            setEmail({ ...email, [e.target.name]: e.target.value });
        }
    }
    function handleChangeType(e) {
        if ( e.target.value ) {
            setType({ ...enquiry, [e.target.name]: e.target.value });
        }
    }
    function handleChangeMessage(e) {
        if ( e.target.value ) {
            setMessage({ ...message, [e.target.name]: e.target.value });
        }
    }

    function handleSubmitForm(e) {
        e.preventDefault();
        if ( fullName && email && message ) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ 
                "form-name": e.target.getAttribute("name"), 
                fullName,
                email,
                message
                })
            }).then(() => navigate("/success/")).catch(error => alert(error));
        } else {
            console.log({fullName, email, message});
        }
    }

    return(
            <div className="contact-layout" >
                <div className="inner">
                    <h1>Say hello!</h1>
                    <p>If you want to get in touch to discuss about an amazing project opportunity, job role, consultancy or if you just want to say "Hi", feel free to contact me via using one of the options bellow.</p>
                    <ul>
                        <li>Twiter <a href="https://twitter.com/MDesignsuk" rel="noopener noreferrer" target="_blank">@MDesignsUK</a>.</li>
                        <li>LinkedIn <a href="https://www.linkedin.com/in/mario-duarte-developer/" rel="noopener noreferrer" target="_blank">@mario-duarte-developer</a></li>
                    </ul>

                    <p>Or using the form bellow.</p>

                    <form name="contact" method="POST" action="" netlify-honeypot="bot-field" data-netlify="true" onSubmit={(e)=>handleSubmitForm(e)}>

                        <p className="hidden">
                            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                        </p>

                        <div className="field-group">
                            <label htmlFor="email">Email address:</label>
                            <input id="email" name="email" type="email" placeholder="Your email address..." required onChange={(e)=>handleChangeEmail(e)}/>
                        </div>

                        <div className="field-col-group">
                            <div className="field-group">
                                <label htmlFor="fullName">Name:</label>
                                <input id="fullName" type="text" name="fullName" placeholder="Your full name..." required onChange={(e)=>handleChangeName(e)}/>
                            </div>
                        </div>

                        <div className="field-group">
                            <label htmlFor="message">Your message:</label>
                            <textarea id="message" name="message" rows="10" placeholder="Hi Tiago Caires..." required onChange={(e)=>handleChangeMessage(e)}></textarea>
                        </div>

                        <input className="btn-primary" type="submit" value="Send message" />

                    </form>

                </div>
            </div>
    )
}

export default ContactPage
