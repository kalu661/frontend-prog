import React from "react";
import {
	MDBCard,
	MDBCardImage,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardFooter,
	MDBCardGroup,
} from "mdb-react-ui-kit";

export default function Cards() {
	return (
		<MDBCardGroup>
			<MDBCard background='dark' className='text-white'>
				<MDBCardImage
					src='https://cutewallpaper.org/23/web-development-wallpaper-hd/be-your-full-stack-web-developer-and-build-your-complete-website-by-pratim440-fiverr.png'
					alt='...'
					position='top'
				/>
				<MDBCardBody>
					<MDBCardTitle className='fs-3'>
						Tecnicatura Superior en Desarrollo de Software
					</MDBCardTitle>
					<MDBCardText>
						This is a wider card with supporting text below as a natural lead-in
						to additional content. This content is a little bit longer.
					</MDBCardText>
				</MDBCardBody>
				<MDBCardFooter>
					<small className='text-muted'>Director Miguel Mateo Badaracco</small>
				</MDBCardFooter>
			</MDBCard>

			<MDBCard background='dark' className='text-white'>
				<MDBCardImage
					src='https://c1.wallpaperflare.com/preview/485/927/655/board-electronics-computer-training.jpg'
					alt='...'
					position='top'
				/>
				<MDBCardBody>
					<MDBCardTitle className='fs-3'>
						Tecnicatura en Mecatronica
					</MDBCardTitle>
					<MDBCardText>
						This is a wider card with supporting text below as a natural lead-in
						to additional content.
					</MDBCardText>
				</MDBCardBody>
				<MDBCardFooter>
					<small className='text-muted'>Last updated 3 mins ago</small>
				</MDBCardFooter>
			</MDBCard>

			<MDBCard background='dark' className='text-white'>
				<MDBCardImage
					src='https://previews.123rf.com/images/watiporn/watiporn1604/watiporn160400137/57252067-el-tubo-de-ensayo-con-la-estructura-qu%C3%ADmica-de-fondo.jpg?fj=1'
					alt='...'
					position='top'
				/>
				<MDBCardBody>
					<MDBCardTitle className='fs-3'>
						Tecnicatura en Quimica industrial
					</MDBCardTitle>
					<MDBCardText>
						This is a wider card with supporting text below as a natural lead-in
						to additional content. This card has even longer content than the
						first to show that equal height action.
					</MDBCardText>
				</MDBCardBody>
				<MDBCardFooter>
					<small className='text-muted'>Last updated 3 mins ago</small>
				</MDBCardFooter>
			</MDBCard>

			<MDBCard background='dark' className='text-white'>
				<MDBCardImage
					src='https://img2.rtve.es/v/5435018/vertical/?h=400'
					alt='...'
					position='top'
				/>
				<MDBCardBody>
					<MDBCardTitle className='fs-3'>
						Tecnicatura en Telecomunicaciones
					</MDBCardTitle>
					<MDBCardText>
						This is a wider card with supporting text below as a natural lead-in
						to additional content. This card has even longer content than the
						first to show that equal height action.
					</MDBCardText>
				</MDBCardBody>
				<MDBCardFooter>
					<small className='text-muted'></small>
				</MDBCardFooter>
			</MDBCard>
		</MDBCardGroup>
	);
}
