import React from "react";

class SubtractButton extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={() => this.props.subtract()}
                    className="buttons">Subtract</button>
            </div>

        );
    }
}

export default SubtractButton;