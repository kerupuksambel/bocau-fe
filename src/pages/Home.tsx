import useAuthStore from '@/stores/authStore';

const Home = () => {
    const auth = useAuthStore();
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Hi!</h1>
            {
                auth.auth.isAuthenticated 
                ?  <p>Welcome, <b>{auth.auth.address}</b></p> 
                :  <p>Login first</p>
            }
        </div>
    )
}

export default Home