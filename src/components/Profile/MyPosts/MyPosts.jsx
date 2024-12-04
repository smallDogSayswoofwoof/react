import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
    <div> MyPost
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post likes='1' message='I want to add post forever' />
            <Post likes='2' message='I want to eats dinner' />
            <Post likes='5' message='Do you really read this text?'/>
        </div>
    </div>
    )
}

export default MyPosts;
