import BidList from "@/components/page/user/Dashboard/BidList";
import DashboardCard from "@/components/page/user/Dashboard/DashboardCard";
import useAuthStore from "@/stores/authStore";

const Dashboard = () => {
    const auth = useAuthStore();

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
                    buttonAction={() => {}}
                >
                    <div className="space-y-4">
                        <BidList
                            name="Gambar 1"
                            type="Digital media"
                            price={0.00001}
                            time="05:11"
                        />
                        <BidList
                            name="Gambar 2"
                            type="Digital media"
                            price={0.0001}
                            time="01:12:11"
                        />
                        <BidList
                            name="Gambar 1"
                            type="Digital media"
                            price={0.00001}
                            time="02:10:09"
                        />
                    </div>
                </DashboardCard>
            </div>
        </div>
    )
}

export default Dashboard