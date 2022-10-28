import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

export default function Heading() {
	return (
		<header>
			<div
				className='p-5 text-center bg-image'
				style={{
					backgroundImage:
						"url('https://agenfor.com.ar/wp-content/uploads/2020/02/ciencia2-768x512.jpg')",
					height: "700px",
				}}
			>
				<div className='mask' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
					<div className='d-flex justify-content-center align-items-center h-100'>
						<div className='text-white'>
							<h1 className='mb-3'>Instituto Politecnico Formosa</h1>
							<h4 className='mb-3'>“La innovacion es hoy...”</h4>
							<MDBBtn tag='a' color='light' outline rounded size='lg'>
								Informacion
							</MDBBtn>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
