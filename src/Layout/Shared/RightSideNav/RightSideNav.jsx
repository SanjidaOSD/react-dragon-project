import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa6";
import QZone1 from '../../../assets/qZone1.png';
import QZone2 from '../../../assets/qZone2.png';
import QZone3 from '../../../assets/qZone3.png';



const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl font-poppins font-bold">LogIn with</h2>
                <button className="btn btn-outline w-full mb-4">
                    <div className=" flex  gap-2 text-blue-700">
                        < FaGoogle />
                        Login with Google
                    </div>
                </button>
                <button className="btn btn-outline w-full">
                    <div className=" flex  gap-2 text-black-700">
                        < FaGithub />
                        Login with Github
                    </div>
                </button>
            </div>


            <div className="p-4">
                <h2 className="text-3xl font-poppins font-bold">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border-solid border-2 border-gray-200 rounded-t-lg" href=" ">
                    <FaFacebook className="mr-4"></FaFacebook>
                    FaceBook
                </a>
                <a className="p-4 flex text-lg items-center border-solid border-gray-200 " href=" ">
                    <FaTwitter className="mr-4"></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 flex text-lg items-center border-solid border-2 border-gray-200 rounded-b-lg" href=" ">
                    <FaInstagram className="mr-4"></FaInstagram>
                    Instagram
                </a>
            </div>

            {/* Q zone */}
            <div className="p-4 mb-6">
                <h2 className="text-3xl font-poppins font-bold">Q-Zone</h2>
                <img src={QZone1} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone3} alt="" />
                
            </div>

        </div>
    );
};

export default RightSideNav;