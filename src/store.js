import {reactive} from 'vue';

export const store = reactive({
    /* API URL MOVIES */
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=b4e23a9ed230e66a8e63084cff9d0035&query=',
    movieList: [],

    /* API URL MOVIES */
    apiSeriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=b4e23a9ed230e66a8e63084cff9d0035&query=',
    seriesList: [],

    searchMovie: '',
    lang: ['en', 'es', 'it', 'ja', 'fr']
})
