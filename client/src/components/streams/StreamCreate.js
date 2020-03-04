import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
    renderInput(formProps) {
        // console.log(formProps);
        return (
            <div className="field">
                <input type="text" />
            </div>
        );
    };

    render() {
        return (
            <form className="ui form">
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        );
    };
};

// console.log()
export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);