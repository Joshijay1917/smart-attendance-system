import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../../Context/AuthContext';

const URL = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    const { isAdmin } = useAuth()

    return (
        <div className='box mt-20 p-1'>
            <span>
                <Link to={'/'}>
                    {isAdmin ? 'Faculty Portal' : 'Student Portal'}
                </Link>
            </span>
            {pathnames.map((value, index) => {
                const to = "/" + pathnames.slice(0, index + 1).join("/");
                return (
                    <span key={to}>
                        <Link to={to}>
                        &nbsp; &gt; &nbsp;
                            {value}
                        </Link>
                        {index < pathnames.length - 1 && " / "}
                    </span>
                );
            })}
        </div>
    )
}

export default URL
