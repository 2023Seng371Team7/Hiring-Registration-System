import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import JobListing from './pages/JobListings';
import MyApplications from './pages/MyApplications';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import ViewApplicants from './pages/ViewApplicants';
import ViewJobs from './pages/ViewJobs';
import Admin from './pages/Admin';
import myRoutes from './routes';


const Router = () => (
	<Routes>
		<Route path={myRoutes.Home} index element={<LoginPage />} />
		<Route path={myRoutes.LogIn} index element={<LoginPage />} />
		<Route path={myRoutes.SignUp} index element={<SignUpPage />} />
		<Route path={myRoutes.JobsListed} index element={<JobListing />} />
		<Route path={myRoutes.MyApplications} index element={<MyApplications />} />
		<Route path={myRoutes.Applicants} index element={<ViewApplicants />} />
		<Route path={myRoutes.Admin} index element={<Admin />} />
		<Route path={myRoutes.ViewJobs} index element={<ViewJobs />} />
	</Routes>
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>
)
