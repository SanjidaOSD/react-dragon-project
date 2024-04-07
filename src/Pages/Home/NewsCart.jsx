import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const NewsCart = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (

        <div>
            {/* <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div> */}


            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200)}<Link
                                to={`/news/${_id}`}>read more....</Link></p>
                            : <p>{details}</p>
                    }                </div>
                <figure><img src={image_url} alt="Shoes" /></figure>
            </div>
        </div>




    );
};

export default NewsCart;
NewsCart.propTypes = {
    news: PropTypes.object

}