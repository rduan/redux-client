import React, { Component } from 'react'
import {connect} from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if(!this.props.authenticated) {
        this.context.router.push('/signin');

      }
    }

    // componentWillUpdate(nextProps) {
    //   if(nextProps.authenticated) {
    //     this.context.router.push('/feature')
    //   }
    // }
    render() {
      console.log('rendering from auth hoc: ', ComposedComponent);
      console.log(this.props.authenticated);
      console.log(this.context);

      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {authenticated: state.auth.authenticated}
  }
  return connect(mapStateToProps)(Authentication);
}

