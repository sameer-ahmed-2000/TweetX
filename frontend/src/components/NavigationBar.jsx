export const NavigationBar = () => {
    return (
        <nav className="flex justify-between items-center p-4 shadow-md">
            <div className="px-8 font-sans font-bold text-custom-red">TweetX</div>
            <div className="flex gap-8 md:pr-64">
            <a href="#" className="font-sans font-bold text-custom-ash hover:text-custom-red">Feed</a>
            <a href="#" className="font-sans font-bold text-custom-ash hover:text-custom-red">User</a>
            <a href="#" className="font-sans font-bold text-custom-ash hover:text-custom-red">Profile</a>
            </div>
        </nav>
    );
};