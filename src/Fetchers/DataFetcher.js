import { observable, action } from "mobx";

const ROOT_URL =  'https://jsonplaceholder.typicode.com/';
export default {
  
    getUsers(){
        return fetch(`${ROOT_URL}users`);
    },
    getPosts(id){
        return  fetch(`${ROOT_URL}posts?${id}&skip=0&limit=10`);
    },
    getPostDetails(id){
        return  fetch(`${ROOT_URL}posts/${id}`);
    },
    getPostComments(id){
        return  fetch(`${ROOT_URL}comments?postId=${id}`);
    },
    deletePosts(id){
        return  fetch(`${ROOT_URL}posts/${id}`, {
            method: 'delete'
          });
    }
}