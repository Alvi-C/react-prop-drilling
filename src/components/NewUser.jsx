/* eslint-disable react/prop-types */

import { useState } from 'react';
const NewUser = ({handleAddNewUser}) => {
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
		const newUser = {
			id: new Date().getTime().toString(),
			username: userName,
        }
        handleAddNewUser(newUser)
        setUserName('');
    }

    return (
			<div className="">
				<h3 className="text-xl font-bold mb-3 text-center">User Registration</h3>
				<div className='bg-blue-50 w-[450px] pb-4 pt-1 px-7 rounded-lg'>
					<form onSubmit={handleSubmit}>
						<label>Username:</label>
						<input
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
							type='text'
							name='username'
							placeholder='username'
							className='bg-slate-50 p-1 rounded-lg mx-3 placeholder:text-sm placeholder:font-light placeholder:pl-2'
						/>
						<button
							type='submit'
							className='bg-blue-500 text-white px-4 py-1 rounded mt-3'
						>
							Add User
						</button>
					</form>
				</div>
			</div>
		)
};

export default NewUser;