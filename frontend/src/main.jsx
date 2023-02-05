import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Homepage} from './pages/Homepage'

//TODO: Make actual other pages and import them
const Page1 = () => <h1>Page 1</h1>;
const Page2 = () => <h1>Page 2</h1>;
const Page3 = () => <h1>Page 3</h1>;

const Router = () => (
	<Routes>
		<Route index element={<Homepage />} />
		<Route path="/page1" element={<Page1 />} />
		<Route path="/page2" element={<Page2 />} />
		<Route path="/page3" element={<Page3 />} />
	</Routes>
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>
)
