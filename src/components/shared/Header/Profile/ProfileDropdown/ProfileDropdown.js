
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguage, selectLanguage } from "../../../../../redux/slices/userSlice"
import languageIcon from "../../../../../assets/languageChangeIcon.svg"

const ProfileDropdown = ({logoutClicked, setIsProfileDropdown}) => {
    const langArr = ["USen", "EUen", "EUde", "EUes", "USes", "EUfr", "USfr", "EUit", "EUnl", "CNzh", "TWzh", "JPja", "KRko", "EUru"]
    const dispatch = useDispatch()
    const lang = useSelector(selectLanguage)
    
    return (
        <div id="profile-dropdown">
            <div id="language-selection">
                <select id="language-select" value={lang} onChange={e => dispatch(changeLanguage(e.target.value))}>
                {langArr.map(langArrItem => (
                    <option className="language-option" key={langArrItem}>{langArrItem}</option>  
                ))}
                </select>
                <img id="language-icon" src={languageIcon} alt="language change icon" />
            </div>
            <input id="logout-button" type="button" onClick={logoutClicked} value="Logout"/>
        </div>
    )
}

export default ProfileDropdown