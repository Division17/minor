import React, { useState, useContext, useEffect, useReducer } from "react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../../assets/images/avatar.jpg";
import addFriend from "../../../assets/images/add-friend.png";
import { AuthContext } from "../../SharedComponents/Context/AppContext";
import {
  PostsReducer,
  postActions,
  postsStates,
} from "../../SharedComponents/Context/PostReducer";
import {
  doc,
  setDoc,
  collection,
  query,
  onSnapshot,
  where,
  getDocs,
  updateDoc,
  arrayUnion,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../SharedComponents/firebase/Firebase";
import CommentSection from "./CommentSection";

const PostCard = ({ uid, id, logo, name, email, text, image, timestamp }) => {
  const { user } = useContext(AuthContext);
  const [state, dispatch] = useReducer(PostsReducer, postsStates);
  const likesRef = doc(collection(db, "posts", id, "likes"));
  const likesCollection = collection(db, "posts", id, "likes");
  const singlePostDocument = doc(db, "posts", id);
  const { ADD_LIKE, HANDLE_ERROR } = postActions;
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    if(!open){
      setOpen(true)
    }else{
      setOpen(false)
    }
  };

  const addUser = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].ref;
      await updateDoc(data, {
        friends: arrayUnion({
          id: uid,
          image: logo,
          name: name,
        }),
      });
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };

  const handleLike = async (e) => {
    e.preventDefault();
    const q = query(likesCollection, where("id", "==", user?.uid));
    const querySnapshot = await getDocs(q);
    const likesDocId = await querySnapshot?.docs[0]?.id;
    try {
      if (likesDocId !== undefined) {
        const deleteId = doc(db, "posts", id, "likes", likesDocId);
        await deleteDoc(deleteId);
      } else {
        await setDoc(likesRef, {
          id: user?.uid,
        });
      }
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };

  const deletePost = async (e) => {
    e.preventDefault();
    try {
      if (user?.uid === uid) {
        await deleteDoc(singlePostDocument);
      } else {
        alert("You cant delete other users posts !!!");
      }
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getLikes = async () => {
      try {
        const q = collection(db, "posts", id, "likes");
        await onSnapshot(q, (doc) => {
          dispatch({
            type: ADD_LIKE,
            likes: doc.docs.map((item) => item.data()),
          });
        });
      } catch (err) {
        dispatch({ type: HANDLE_ERROR });
        alert(err.message);
        console.log(err.message);
      }
    };
    return () => getLikes();
  }, [id, ADD_LIKE, HANDLE_ERROR]);

  return (
    <div className="mb-4 w-4/5 shadow-sm border-2 rounded-xl flex flex-col">
      <div className="flex flex-col py-4 bg-white rounded-t-3xl">
        <div className="flex justify-start items-center pb-4 pl-4 ">
          <Avatar
            size="sm"
            variant="circular"
            src={logo || avatar}
            alt="avatar"
          ></Avatar>

          <div className="flex flex-col ml-4">
            <p className=" py-2 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
              {email}
            </p>
            <p className=" font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
              Published: {timestamp}
            </p>
          </div>
          {user?.uid !== uid && (
            <div
              onClick={addUser}
              className="w-full flex justify-end cursor-pointer mr-10"
            >
              <img
                className="hover:bg-blue-100 rounded-xl p-2 h-10"
                src={addFriend}
                alt="addFriend"
              ></img>
            </div>
          )}
        </div>
        <div>
          <p className="ml-4 pb-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
            {text}
          </p>
          {image && (
            <img className="h-[500px] w-full" src={image} alt="postImage"></img>
          )}
        </div>
        <hr className="ml-6 mr-6  "/>
        <div className="flex justify-around items-center pt-4">
          <button
            className="flex items-center cursor-pointer rounded-lg p-2 hover:bg-gray-100 font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none"
            onClick={handleLike}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

            {state.likes?.length > 0 && state?.likes?.length} Likes
          </button>
          <div
            className="flex items-center cursor-pointer rounded-lg p-2 hover:bg-gray-100"
            onClick={handleOpen}
          >
            <div className="flex items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>

              <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
                Comments
              </p>
            </div>
          </div>
          <div
            className="flex items-center cursor-pointer rounded-lg p-2 hover:bg-gray-100"
            onClick={deletePost}
          >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

            <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
              Delete
            </p>
          </div>
        </div>
      </div>
      {open && <CommentSection postId={id}></CommentSection>}
    </div>
  );
};

export default PostCard;
