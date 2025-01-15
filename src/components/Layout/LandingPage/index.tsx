const LandingPageLayout = ({children}: LayoutProps) => {
    return (
        <>
            <div className="fixed top-0 w-full h-[80px] bg-primary text-white">
                LP Header
            </div>
            <div className="mt-[80px] min-h-[100vh]">
                {children}
            </div>
            <div className="w-full h-[200px] bg-primary text-white">
                LP Footer
            </div>
        </>
    )
}

export default LandingPageLayout