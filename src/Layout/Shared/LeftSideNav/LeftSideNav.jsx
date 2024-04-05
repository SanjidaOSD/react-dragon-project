import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-10">
            <h3 className="text-3xl">All Categories</h3>
            <h3 className="border bg-gray-300 p-4 text-center rounded-md">National News</h3>
            {
                categories.map(category =>
                     <NavLink className="block ml-4 text-xl font-semibold text-gray-500 text-left items-center"
                    key={category.id}
                    to={`/category/${category.id}`}>
                    {category.name}
                </NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;