import Axios from 'axios'

const KEY = 'AIzaSyCx0Ia_wsFXnT6I9jvJP9m8KewcemTAwKc';

    export default Axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part : 'snippet',
            maxResult : 5,
            key : KEY
        }
    });
