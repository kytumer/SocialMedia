import OtherInfo from './OtherInfo/OtherInfo';
import Person from './Person/Person';
import Posts from './Posts/Posts';
import './Profile.css';

const Profile = () => {
    return (
        <div className="Main__Content">
            <div className='Content'>
                <Person />
                <OtherInfo/>
            </div>
            <Posts />
        </div>
    )
}

export default Profile;