import React from "react";
import {
	MDBInput,
	MDBCol,
	MDBRow,
	MDBCheckbox,
	MDBBtn,
	MDBIcon,
} from "mdb-react-ui-kit";

export function Login() {
	return (
		<div classNamee='d-flex align-items-center justify-content-center mb-4'>
			<form>
				<MDBInput
					className='mb-4'
					type='email'
					id='form2Example1'
					label='Email address'
				/>
				<MDBInput
					className='mb-4'
					type='password'
					id='form2Example2'
					label='Password'
				/>

				<MDBRow className='mb-4'>
					<MDBCol className='d-flex justify-content-center'>
						<MDBCheckbox
							id='form2Example3'
							label='Remember me'
							defaultChecked
						/>
					</MDBCol>
					<MDBCol>
						<a href='#!'>Forgot password?</a>
					</MDBCol>
				</MDBRow>

				<MDBBtn type='submit' className='m-2  text-center' block>
					Sign in
				</MDBBtn>

				<div className='text-center'>
					<p>
						Not a member? <a href='#!'>Register</a>
					</p>
					<p>or sign up with:</p>

					<MDBBtn floating className='mx-1'>
						<MDBIcon fab icon='facebook-f' />
					</MDBBtn>

					<MDBBtn floating className='mx-1'>
						<MDBIcon fab icon='google' />
					</MDBBtn>

					<MDBBtn floating className='mx-1'>
						<MDBIcon fab icon='twitter' />
					</MDBBtn>

					<MDBBtn floating className='mx-1'>
						<MDBIcon fab icon='github' />
					</MDBBtn>
				</div>
			</form>
		</div>
	);
}
