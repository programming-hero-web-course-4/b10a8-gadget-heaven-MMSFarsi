import React from 'react'
import { NavLink } from 'react-router-dom'

const Categories = ({ categories }) => {

    return (
        <div>
            <div to="/cards" role="tablist" className="tabs tabs-lifted">
                {categories.map(category => <NavLink to={`categories/${category.category}`} key={category.category}>{category.category}</NavLink>
                )}
            </div>
        </div>

    )
}

export default Categories