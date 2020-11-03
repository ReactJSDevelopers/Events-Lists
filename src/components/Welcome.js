// import React, {Component} from 'react'

// class Welcome extends Component {
// 	render() {
// 		return <h1>Class Component</h1>
// 	}
// }

// export default Welcome

import React from 'react'
import Hello from './Hello'
import Test from '../styles/Test'

function Welcome (){
	return (
		<div>
				<Hello fname="Sammmidoooo" lname="wacu"/>
				<Test/>
			<h2>Hello Sam</h2>
		</div>
		)
}

export default Welcome