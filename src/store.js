import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=b4e23a9ed230e66a8e63084cff9d0035&query=',
    movieList: [],
    searchMovie: '',
    lang: ['en', 'es', 'it', 'ja', 'fr']
})
