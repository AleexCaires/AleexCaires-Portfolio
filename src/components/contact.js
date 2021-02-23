import ContactStyles from '../styles/components/contact.module.scss';
import React from "react";

const Contact = () => (
    <div id={ContactStyles.main}> 
        <h1>Contact Form</h1>
            <form action="">
                <input type="text" placeholder="Your full Name.." name="name" required></input>
                <input type="email" placeholder="Your Email address.." name="email" required></input>
                    <textarea placeholder="Hi Tiago Caires, I am contacting you because..." name="message" required></textarea>
                <input type="submit" value="Send Message"></input>
            </form>
    </div>
            
);

export default Contact;