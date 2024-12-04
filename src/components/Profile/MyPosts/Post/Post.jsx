import s from "./Post.module.css";

const Post = (props) => {
     return (
         <div className={s.item}>
             <img src='https://avatars.mds.yandex.net/i?id=f66ad3c2865ae139055ec742d973ab77a8b450f2b7a35f7b-11865037-images-thumbs&n=13'/>
             {props.message}
             <div>
                 {props.likes}    <span>like</span>
             </div>
         </div>
     )
}

export default Post;