import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>{ error }</div>
                </div> 
            );
        };
    };

    renderInput = ({ input, label, meta }) => {
        const className=`field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{ label }</label>
                <input { ...input } autoComplete='off' />
                {this.renderError(meta)}
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
                className="ui form error"
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