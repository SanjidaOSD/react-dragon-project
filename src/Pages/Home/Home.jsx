import { useLoaderData } from "react-router-dom";
import Header from "../../Layout/Shared/Header/Header";
import LeftSideNav from "../../Layout/Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Layout/Shared/Navbar/Navbar";
import RightSideNav from "../../Layout/Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCart from "./NewsCart";

const Home = () => {
    const news = useLoaderData();
    console.log(news)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    {
                        news.map(aNews => (
                            <NewsCart key={aNews._id} news={aNews}></NewsCart>
                        ))
                    }

                </div>
                <div className="border border-black">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;