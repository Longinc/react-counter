import React from "react";

class AddButton extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={() => this.props.increment()}
                    className="buttons">Add</button>
            </div>

        );
    }
}

export default AddButton;







