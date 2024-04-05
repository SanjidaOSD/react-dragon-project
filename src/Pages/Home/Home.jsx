import Header from "../../Layout/Shared/Header/Header";
import LeftSideNav from "../../Layout/Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Layout/Shared/Navbar/Navbar";
import RightSideNav from "../../Layout/Shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-3xl">News comming soon....</h2>
                </div>
                <div className="border border-black">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;