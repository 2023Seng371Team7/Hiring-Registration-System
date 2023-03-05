import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import JobListing from './pages/JobListings';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import myRoutes from './routes';


const Router = () => (
	<Routes>
		<Route path={myRoutes.login} index element={<LoginPage />} />
		<Route path={myRoutes.SignUp} index element={<SignUpPage />} />
		<Route path={myRoutes.JobsListed} index element={<JobListing />} />
	</Routes>
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>
)
