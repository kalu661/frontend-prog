import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Login } from "../inputs/Login";
import Register from "../inputs/Register";

export function Routing() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='login' element={<Login />} />
			<Route path='registro' element={<Register />} />
			{/* <Route path='prueba' element={} /> */}
		</Routes>
	);
}
