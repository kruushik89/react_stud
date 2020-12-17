export class postService {
    url = 'https://jsonplaceholder.typicode.com/posts';

    allPosts = () => {
        return fetch(this.url).then(value => value.json());
    }

    post = (id) => {
        return fetch(`${this.url}/${id}`).then(value => value.json());
    }
}
