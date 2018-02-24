import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions'

class Signin extends Component {
  handleFormSubmit({email,password}) {
    console.log('======', email, password);
    this.props.signinUser({ email, password });
  }
  render () {

    const { handleSubmit} = this.props;

    console.log('------------', this.props);
    return(

      <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset className="form-group">
        <label>Email: </label>
        <Field name='email' component='input' type='text' className="form-control" />
      </fieldset>
      <fieldset className="form-group">
        <label>password:</label>
        <Field name='password' component='input' type='text' className="form-control" />
      </fieldset>
      <button action="submit" className="btn btn-primary">sing in</button>
    </form>
    )
  }
}

const signinForm = reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin); 

export default connect(null, actions)(signinForm); 
