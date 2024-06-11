import { useState } from "react";
import Post from "../page/Post";

function PostCard({ titulo, post, id }) {
  const [openEditPost, setOpenEditPost] = useState(false);

  const openEdit = () => {
    setOpenEditPost(true);
  };

  const closeEdit = () => {
    setOpenEditPost(false);
  };

  return (
    <div onClick={openEdit}>
      {openEditPost && (
        <Post
          titulo={titulo}
          post={post}
          idPost={id}
          newPost={false}
          onclose={closeEdit}
        />
      )}
      <div id={id}
        className="dark:bg-preto dark:text-white bg-slate-300 text-black p-2 w-64 min-h-52 overflow-hidden hover:border-2 hover:border-slate-400 dark:hover:border-2 hover:scale-105"
      >
        <p className="p-2 font-semibold text-md dark:bg-cinza bg-claro rounded-md">
          {titulo}
        </p>
        <p className="p-2 text-sm mt-3">{post}</p>
      </div>
    </div>
  );
}

export default PostCard;
