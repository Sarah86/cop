import React from "react"

class CustomToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openAccordion: false,
        };
    }

    handleChange = () => {
        this.setState({
            openAccordion: !this.state.openAccordion,
        });
        //alert("change");
    };

    render() {

        const openAccordion = this.state.openAccordion ? "opened-accordion" : "closed-accordion" ;

        return (
            <div onClick={this.handleChange} className={this.props.className + " " + `${openAccordion}`}>
                {this.props.children}
            </div>
        );
    }
}

export default CustomToggle;