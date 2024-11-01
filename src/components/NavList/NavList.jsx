import PropTypes from 'prop-types'; // ES6


const NavList = ({route}) => {
    const {name, id, path} = route
    return (
        <div >
           
            <li className='hover:underline'><a href={path}>{name}</a></li>
            
        </div>
    );
};


NavList.propTypes = {
    route: PropTypes.object
}
export default NavList;