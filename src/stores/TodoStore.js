import { observable, action } from "mobx";
import datafetcher from '../Fetchers/DataFetcher'

class TodoStore {

    @observable name = '';
    @observable company = '';
    @observable blogs = '';
    
    @action
    fetchUsers(){
         return datafetcher.getUsers();
    }

    @action
    fetchUserPosts(id){
        return datafetcher.getPosts(id);
    }

    @action
    getPostDetails(id){
        return datafetcher.getPostDetails(id);
    }

    @action
    getPostcomments(id){
        return datafetcher.getPostComments(id);
    }
    @action
    deletePosts(id){
        return datafetcher.deletePosts(id);
    }

}

export default TodoStore;