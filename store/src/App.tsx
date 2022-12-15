import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import PageHome from './components/Pages/PageHome';
import PageProducts from './components/Pages/PageProducts';
import PageBlog from './components/Pages/PageBlog';
import PageAbout from './components/Pages/PageAbout';
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

const App: React.FC = () => {


	return (
		<div className="App">

			<BrowserRouter>
				<header className="shadow-lg shadow-slate-200 h-30 ">
					<div className="flex flex-row justify-between">

						<div className="ml-10">
						</div>

						<div className="text-center flex w-96">
							<Link to="/" className="w-1/4 h-30 font-raleway text-stone-300 transition ease-in-out hover:bg-stone-400 hover:text-stone-50 duration-200">Home</Link>
							<Link to="/products" className="w-1/4 h-30 font-raleway text-stone-300 transition ease-in-out hover:bg-stone-400 hover:text-stone-50 duration-200">Products</Link>
							<Link to="/blog" className="w-1/4 h-30 font-raleway text-stone-300 transition ease-in-out hover:bg-stone-400 hover:text-stone-50 duration-200">Blog</Link>
							<Link to="/about" className="w-1/4 h-30 font-raleway text-stone-300 transition ease-in-out hover:bg-stone-400 hover:text-stone-50 duration-200">About</Link>
																{/* "w-1/4 font-raleway border-t-4 border-stone-900 text-stone-900 font-bold"
															) : (
																"w-1/4 h-30 font-raleway text-stone-300 transition ease-in-out hover:bg-stone-400 hover:text-stone-50 duration-200" */}


						</div>

						<div className="mr-10">
							<div className="flex">
								<button className="h-30 p-3 transition ease-in-out hover:bg-stone-400 hover:text-stone-50 duration-200">
									<MagnifyingGlassIcon className="h-6 w-6 mx-3 text-black-500" />
								</button>
								<button className="h-30 p-3 transition ease-in-out hover:bg-stone-400 hover:text-stone-50 duration-200">
									<ShoppingCartIcon className="h-6 w-6 mx-3 text-black-500" />
								</button>
							</div>
						</div>
					</div>
				</header>



				<Routes>
					<Route index element={<PageHome />}></Route>
					<Route path="/" element={<PageHome />}></Route>
					<Route path="/products" element={<PageProducts />}></Route>
					<Route path="/blog" element={<PageBlog />}></Route>
					<Route path="/about" element={<PageAbout />}></Route>

				</Routes>
			</BrowserRouter>
		</div>

	);
}


export default App;
