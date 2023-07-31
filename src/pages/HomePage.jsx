
import { useState } from 'react';
import Users from '../components/Users';
import NewUser from '../components/NewUser';
const HomePage = () => {
    const innitialValue = [
			{ id: 1, username: 'alvi' },
			{ id: 2, username: 'jhon' },
		]

    const [users, setUsers] = useState(innitialValue)

    const handleDeleteUser = (id) => {
        const filteredUsers = users.filter(user => user.id !== id)
        setUsers(filteredUsers)
    }

    const handleAddNewUser = (newUser) => {
        console.log(newUser)
        setUsers(prevUsers => [...prevUsers, newUser])
    }

    return (
			<div>
				<h3 className='text-3xl font-bold underline text-center mt-10'>
					Homepage
				</h3>
				<div className='flex flex-col items-center mt-10'>
					<NewUser handleAddNewUser={handleAddNewUser} />
					<Users users={users} handleDeleteUser={handleDeleteUser} />
				</div>
			</div>
		)
};

export default HomePage;