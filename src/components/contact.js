import ContactStyles from '../styles/components/contact.module.scss';
import React from "react";

const Contact = () => (
    <div id={ContactStyles.main}> 
        <h1>Contact Form</h1>
        <p>If you want to get in touch to discuss about an amazing project opportunity, job role, consultancy,
            tuition or if you just want<br></br> to say "Hi", feel free to contact me via using one of the options bellow.></p>
            <ul>
                <li>
                    LinkedIn 
                    <a href="https://www.linkedin.com/in/alex-caires-b7b39b174/" rel="noopener noreferrer" target="_blank">@TiagoCaires</a>
                </li>
            </ul>
            <p>Or using the form bellow.</p>


            <form action="">
                <input type="text" placeholder="Your full Name.." name="name" required></input>
                <input type="email" placeholder="Your Email address.." name="email" required></input>
                    <textarea placeholder="Hi Tiago Caires, I am contacting you because..." name="message" required></textarea>
                <input type="submit" value="Send Message"></input>
            </form>
    </div>
            
);

export default Contact;