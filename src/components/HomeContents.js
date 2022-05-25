import React, { useState,useEffect } from 'react'
import {getDocs,collection, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebase';
import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";
const ContainerStyled = styled.div`
    display: flex;
    width: 90%;
    border-radius: 20px;
    border: 1px solid #000;
    position: relative;
    margin-top : 25px;
    border: 3px solid rgb(3, 169, 244);
   
    .photo{
        width: 75px;
        border-right: 1px solid #000;
        margin : 0;
    }
    .content{
        padding-top: 10px;
        width: 400px;
        margin : 0;
        margin-left: 10px;
        margin-right: 5px;
        
    }
    .content_under{
        margin-top: 15px;
        position: relative;
        padding-bottom: 10px;
        button{
            background-color: rgb(3, 169, 244);
            cursor: pointer;
            color: white;
            border: none;
            width: 25px;
            height: 25px;
            position: absolute;
            top: 0;
            right: 5px;
            font-size: 1.2rem;
            padding-top: 2px;
            font-weight: bold;
            transition : all ease-in 0.3s
        }
        button:hover{
            trasnform: rotate(320deg);
        }
    }
`

const HomeContents = () => {
    const [postlist,setPostlist] = useState([]);
    const postsCollectionRef = collection(db, "posts");
   
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            setPostlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getPosts()
    }, [postlist])

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id)
        await deleteDoc(postDoc)
    }
  return (
    <div>
      {postlist.map((post) => (
          <ContainerStyled>
            <div className="photo">포토사진</div>
            <div className='content'> 
                <div>{post.title}</div>
                <div className='content_under'>
                    <div>{post.author.name}</div>
                    <button onClick={() => {deletePost(post.id)}}><AiOutlineClose /></button>
                </div>
            </div>
          </ContainerStyled>
      ))}
    </div>
  )
}

export default HomeContents
