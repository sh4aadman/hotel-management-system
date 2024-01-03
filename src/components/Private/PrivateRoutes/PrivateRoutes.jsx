import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return (<div className='min-h-screen flex justify-center items-center'><span className="loading loading-infinity loading-lg"></span>
        </div>)
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;