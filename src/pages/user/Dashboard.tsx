import BidList from "@/components/page/user/Dashboard/BidList";
import DashboardCard from "@/components/page/user/Dashboard/DashboardCard";
import useAuthStore from "@/stores/authStore";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const auth = useAuthStore();
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <h1 className="text-3xl w-full">
                Welcome, <b>{auth.auth.address}</b>.
            </h1> 
            <div className="my-6 space-3">
                <DashboardCard
                    className="w-1/3"
                    title="Your Bids"
                    buttonName="See more"
                    buttonAction={() => navigate('/user/bids')}
                >
                    <div className="space-y-4">
                        <BidList
                            name="Gambar 1"
                            type="Digital media"
                            price={0.00001}
                            endTime={new Date('2025-02-17T03:24:00')}
                        />
                        <BidList
                            name="Gambar 2"
                            type="Digital media"
                            price={0.0001}
                            endTime={new Date('2025-02-19T03:24:00')}
                        />
                        <BidList
                            name="Gambar 1"
                            type="Digital media"
                            price={0.00001}
                            endTime={new Date('2025-02-22T03:24:00')}
                        />
                    </div>
                </DashboardCard>
            </div>
        </div>
    )
}

export default Dashboard