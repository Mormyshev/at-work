import logo from '../../assets/logo.svg'
import { Link } from 'react-router';
import { HOME_ROUTE } from '../../utils/const';
const HeaderLogo = () => {
    return (
        <div>
            <Link to={HOME_ROUTE}>
                <img src={logo}/>
            </Link>
        </div>
    )
}
export default HeaderLogo;