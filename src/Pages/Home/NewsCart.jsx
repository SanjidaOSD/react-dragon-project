import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const NewsCart = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (

        <div>
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