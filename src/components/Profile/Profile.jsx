import s from './Profile.module.css' ;
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://avatars.mds.yandex.net/i?id=1ccb7d02d83d9df415b97bc45d73107a2bdeca07-6962773-images-thumbs&n=13'/>
            </div>
            <div className={s.ava}>
                <img src='https://i.pinimg.com/originals/6c/03/7d/6c037d54bf3c288c3ec1c3390fcb03f8.jpg'/>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;