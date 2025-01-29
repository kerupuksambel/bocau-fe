import useAuthStore from "@/stores/authStore";

const Dashboard = () => {
    const auth = useAuthStore();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, <b>{auth.auth.address}</b></p> 
        </div>
    )
}

export default Dashboard