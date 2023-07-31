/* eslint-disable react/prop-types */

const User = ({ user, handleDeleteUser }) => {
    const { id, username } = user;
    const handleDelete = (id) => {
        handleDeleteUser(id);
    }
    return (
			<>
				<div className='p-4 bg-slate-100 w-52 m-2 rounded-xl'>
					<h3 className='text-lg font-normal'>
						Id: <span className=' text-blue-500'>{id}</span>
					</h3>
					<p className='text-lg font-semibold'>
						Name: <span className=' text-blue-500'>{username}</span>
					</p>
					<button onClick={()=>handleDelete(id)} className='bg-blue-500 text-white px-4 py-1 rounded mt-3'>
						Delete
					</button>
				</div>
			</>
		)
};

export default User;