import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { createAction } from 'redux-actions';
import { Router, Route, Link } from 'react-router'

class Test extends Component{
	render(){
		return (
			<div>
				Hey from Test 
					<div>
							<Link to='/test/2'>Go to nested route </Link>	
					</div>

				{this.props.children}
			</div>
			)
	}
}

function mapDispatchToProps(dispatch) {
  return {
  	test: ()=>dispatch(createAction('TEST')() ),
    dispatch,
  }
}

function mapStateToProps(state){
	return {
		user: state.user,
	}
}


export default connect (mapStateToProps,mapDispatchToProps)(Test);