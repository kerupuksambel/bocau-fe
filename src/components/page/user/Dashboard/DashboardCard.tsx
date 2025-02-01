import { Button } from "@/components/ui/shadcn/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/shadcn/card";

interface CardProps {
    title: string;
    buttonName?: string;
    buttonAction?: () => void;
    children: React.ReactNode;
    className?: string
}

const DashboardCard = ({title, buttonName, buttonAction, children, className}: CardProps) => {
    return (
        <div className={`w-1/4 ${className} px-3`}>
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                {
                    !buttonAction ? <></> : (
                        <CardFooter className="flex justify-center">
                            <Button onClick={buttonAction}>{buttonName ?? "See more"}</Button>
                        </CardFooter>
                    )
                }
            </Card>
        </div>
    )
}

export default DashboardCard