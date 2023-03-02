import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from './pages/Login';
import myRoutes from './routes';


const Router = () => (
	<Routes>
		<Route path={myRoutes.login} index element={<LoginPage />} />
	</Routes>
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>
)
