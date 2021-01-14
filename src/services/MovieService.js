import {AXIOS} from "./axios";

export class MovieService {
    static async getMovies() {
        const {data} = await AXIOS.get('/discover/movie');
        return data;
    }

    static async getMovieById(id) {
        const {data} = await AXIOS.get(`/movie/${id}`);
        return data;
    }
}