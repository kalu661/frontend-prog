import React from "react";
import { Navbar1 } from "./component/layout/Barnav";
import { Routing } from "./component/routers/Routing";
import { ScreenClassProvider } from "react-grid-system";

export function App() {
	return (
		<>
			<ScreenClassProvider>
				<Navbar1 />
				<Routing />
			</ScreenClassProvider>
		</>
	);
}

export default App;

//  Logo polo   https://ipf.edu.ar/img/logo_institucional.jpg
