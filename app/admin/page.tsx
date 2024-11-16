import React from 'react';

const AdminPage = () => {
	return (
		<div className="flex flex-1 flex-col items-center justify-center h-[60vh] text-gray-600">
			<div className="bg-slate-50 flex flex-col p-10 gap-4 rounded-lg">
				<h1 className="text-2xl font-bold">Admin Login Form</h1>
				<div>
					<form className="grid gap-4" action="">
						<div className="flex flex-col gap-2">
							<label className="text-sm" htmlFor="">
								Admin
							</label>
							<input
								className="py-2 px-4 text-gray-800 rounded-lg"
								type="text"
								name="admin"
								placeholder="Enter your username.."
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label className="text-sm" htmlFor="">
								Password
							</label>
							<input
								className="py-2 px-4 text-gray-800 rounded-lg"
								type="password"
								name="password"
								placeholder="Enter your password "
							/>
						</div>
						<button className="bg-gray-700 text-white py-2 rounded-lg hover:scale-105 hover:opacity-90 duration-200">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
