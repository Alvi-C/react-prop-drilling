/* eslint-disable react/prop-types */
import User from "./User";


const Users = ({users, handleDeleteUser}) => {


    return (
        <>
            <section className="flex justify-center items-center mt-10">
                {
                    users.map(user => <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />)
                }
            </section>
        </>
    );
};

export default Users;