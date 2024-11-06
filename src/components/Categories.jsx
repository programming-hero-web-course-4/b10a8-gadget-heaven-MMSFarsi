import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div>
            <div className="tabs tabs-lifted bg-white w-[200px] mx-auto rounded-2xl">
                {categories.map(category => (
                    <NavLink
                        key={category.id}
                        to={`/categories/${category.category}`}
                        className={({ isActive }) => isActive ? 'px-2 py-3 border m-4 text-center rounded-3xl bg-purple-500 text-white' : 'px-2 py-3 border m-4 text-center rounded-2xl bg-[rgba(9,8,15,0.05)]'}>
                        {category.category}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;
