import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import * as actions from '../../actions'

// const renderField = ({
//   input,
//   label,
//   type,
//   meta: { touched, error, warning }
// }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type} />
//       {touched &&
//         ((error && <span>{error}</span>) ||
//           (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// )

class Signup extends Component {
  handleFormSubmit(formProps) {
    console.log('======== submit formProps', formProps)
    this.props.signupUser(formProps);
  }

  renderField({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) {
   return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )}

  render() {
    const { handleSubmit, fields: {email, password, passwordConfirm }, errors } = this.props;
    return (
      <div>Signup
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className='form-group'>
            <label>Emal</label>
            <Field name='email' component={this.renderField} type='email' className='form-control' ></Field>
          </fieldset>
          <fieldset className='form-group'>
            <label>password</label>
            <Field name='password' 
              component={this.renderField} 
              type='password' 
              className='form-control'
            ></Field>
          </fieldset>
          <fieldset className='form-group'>
            <label>confirm password</label>
            <Field name='passwordConfirm' component={this.renderField} type='password' className='form-control' ></Field>
          </fieldset>

          <button action='submit' className='btn btn-primary'>sign up</button>
        </form>
      </div>
    )
  }
}

function validate(formProps) {
  const errors = {};

  console.log('========== formProps', formProps);
  if (!formProps.email) {
    errors.email = 'please enter an email';
  }

  if(!formProps.password) {
    errors.password = ' please enter password';
  }

  if(!formProps.passwordConfirm) {
    errors.passwordConfirm = ' please enter confirm password';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password='password must match'
  }
  return errors;
}

const signupForm = reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(Signup)

export default connect(null, actions)(signupForm);