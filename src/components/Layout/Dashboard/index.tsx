const DashboardLayout = ({children}: LayoutProps) => {
    return (
        <>
            <div className="fixed top-0 w-full h-[80px] bg-yellow-300">
                Dashboard Header
            </div>
            <div className="mt-[80px]">
                {children}
            </div>
        </>
    )
}

export default DashboardLayout