import HeaderAccountItems from "./HeaderAccountItems";
import HeaderLogo from "./HeaderLogo";
const Header = () => {
    return (
        <div className="bg-primary-6 w-full">
            <div className="flex flex-row max-w-[1140px] mx-auto my-[16px] px-4">
                <HeaderLogo/>  
                <div className="ml-auto">
                    <HeaderAccountItems/> 
                </div>
            </div>
        </div>
    )
}
export default Header;