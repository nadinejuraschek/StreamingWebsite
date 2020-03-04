import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
    renderInput({ input, label, meta }) {
        return (
            <div className="field">
                <label>{ label }</label>
                <input { ...input } />
                <div>{ meta.error }</div>
            </div>
        );
    };

    onSubmit(formProps) {
        console.log(formProps);
    };

    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                className="ui form"
            >
                <Field 
                    name="title" 
                    component={this.renderInput} 
                    label="Enter Title" 
                />
                <Field 
                    name="description" 
                    component={this.renderInput} 
                    label="Enter Description" 
                />
                <button className='ui button primary'>Submit</button>
            </form>
        );
    };
};

const validate = (formValues) => {
    const errors = {};
    // only runs if user did not enter a title
    if (!formValues.title) {
        errors.title = 'You must enter a title!';
    } 

    if (!formValues.descritpion) {
        errors.description = 'You must enter a description!';
    }

    return errors;
};

// console.log()
export default reduxForm( {
    form: 'streamCreate',
    validate: validate
} )(StreamCreate);