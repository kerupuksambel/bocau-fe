import { Button } from "@/components/ui/shadcn/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/shadcn/card";
import useAuthStore from "@/stores/authStore";

const Dashboard = () => {
    const auth = useAuthStore();

    return (
        <div className="p-4">
            <h1 className="text-3xl w-full">
                Welcome, <b>{auth.auth.address}</b>.
            </h1> 
            <div className="my-6 space-3">
                <Card className="w-1/4">
                    <CardHeader>
                        <CardTitle>Your Bids</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="flex items-center justify-between space-x-4">
                        <div className="flex flex-nowrap space-x-4 items-center">
                            <img src={"https://placehold.co/1920x1080.png?text=35"} className="w-10 h-10 rounded-full"/>
                            <div>
                                <p className="text-sm font-medium leading-none">Contoh gambar</p>
                                <p className="text-sm text-muted-foreground">Digital media</p>
                            </div>
                        </div>
                        <div>
                            0.00001 ETH
                        </div>
                    </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button>See More</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard