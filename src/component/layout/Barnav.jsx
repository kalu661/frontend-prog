import React, { useState } from "react";
import {
	MDBNavbar,
	MDBContainer,
	MDBNavbarBrand,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBNavbarToggler,
	MDBCollapse,
	MDBBtn,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownItem,
	MDBDropdownMenu,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export function Navbar1() {
	const [showNavText, setShowNavText] = useState(false);
	const [basicModal, setBasicModal] = useState(false);

	const toggleShow = () => setBasicModal(!basicModal);

	return (
		<MDBNavbar expand='lg' dark bgColor='black'>
			<MDBContainer fluid>
				<MDBNavbarBrand tag={Link} to='/'>
					I.P.F
				</MDBNavbarBrand>
				<MDBNavbarToggler
					type='button'
					aria-expanded='false'
					aria-label='Toggle navigation'
					onClick={() => setShowNavText(!showNavText)}
				>
					<MDBIcon icon='bars' fas />
				</MDBNavbarToggler>
				<MDBCollapse navbar show={showNavText}>
					<MDBNavbarNav>
						<MDBNavbarItem>
							<MDBNavbarLink active tag={Link} to='#'>
								Inicio
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBDropdown>
								<MDBDropdownToggle
									style={{ color: "#fff", cursor: "pointer" }}
									tag='a'
									className='nav-link'
								>
									Formularios
								</MDBDropdownToggle>
								<MDBDropdownMenu style={{ backgroundColor: "black" }}>
									<span className=' border-light'>
										<MDBNavbarLink
											tag={Link}
											to={"#"}
											style={{ cursor: "pointer" }}
										>
											Desarrollo de Software
										</MDBNavbarLink>
									</span>
									<span className=' border-light'>
										<MDBNavbarLink
											tag={Link}
											to={"#"}
											style={{ cursor: "pointer" }}
										>
											{" "}
											Mecatronica
										</MDBNavbarLink>
									</span>
									<span className=' border-light'>
										<MDBNavbarLink
											tag={Link}
											to={"#"}
											style={{ cursor: "pointer" }}
										>
											Telecomunicaciones
										</MDBNavbarLink>
									</span>
									<span className=' border-light'>
										<MDBNavbarLink
											tag={Link}
											to={"#"}
											style={{ cursor: "pointer" }}
										>
											Quimica Industrial
										</MDBNavbarLink>
									</span>
								</MDBDropdownMenu>
							</MDBDropdown>
						</MDBNavbarItem>
					</MDBNavbarNav>

					<MDBContainer fluid className='d-flex justify-content-end'>
						<MDBBtn
							tag={Link}
							to='/login'
							className='me-2'
							color='white'
							outline
							rounded
						>
							Iniciar sesion
						</MDBBtn>
						<MDBBtn
							tag={Link}
							to='/registro'
							className='me-2'
							color='white'
							outline
							rounded
						>
							registrarse
						</MDBBtn>
					</MDBContainer>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
}
