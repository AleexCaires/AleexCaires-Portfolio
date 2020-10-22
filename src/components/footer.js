import React from "react"
import $ from "jquery/dist/jquery"

function myfunc(elm) {
    elm.html("<p>Footer updated with jquery!</p>");
}

class Footer extends React.Component {

    componentDidMount() {
        const footer = $('footer');
        console.log(footer);
        myfunc(footer);
    }

    render() {
        return(
            <footer>

            </footer>
        )
    }

}

// const Footer = () => {
//   return <footer><h1>This is the footer</h1></footer>
// }

export default Footer