import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import JobListing from './pages/JobListings';
import MyApplications from './pages/MyApplications';
import LoginPage from './pages/Login';
import JobApply from './pages/JobApply';
import SignUpPage from './pages/SignUp';
import myRoutes from './routes';


const Router = () => (
	<Routes>
		<Route path={myRoutes.LogIn} index element={<LoginPage />} />
		<Route path={myRoutes.SignUp} index element={<SignUpPage />} />
		<Route path={myRoutes.JobsListed} index element={<JobListing />} />
		<Route path={myRoutes.MyApplications} index element={<MyApplications />} />
		<Route path={myRoutes.JobApply} index element={<JobApply />} />
	</Routes>
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>
)
