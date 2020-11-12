const API_KEY = "f1c8477484afb9fdea8cc1759c0c7064"
const BASE_URL = "https://api.themoviedb.org/3"

    const apiSearch = async (url) =>{
        const req = await fetch(`${BASE_URL}${url}language=pt-BR&api_key=${API_KEY}`)
        const json = await req.json()
        return json
    }


export default {
    getHomeList: async() => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                itens : await apiSearch(`/discover/tv?with_network=213?`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                itens : await apiSearch(`/trending/all/week?`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                itens : await apiSearch(`/movie/top_rated?`)
            },
            {
                slug: 'action',
                title: 'Ação',
                itens : await apiSearch(`/discover/movie?with_genres=28&`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                itens : await apiSearch(`/discover/movie?with_genres=35&`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                itens : await apiSearch(`/discover/movie?with_genres=27&`)
            },{
                slug: 'romance',
                title: 'Romance',
                itens : await apiSearch(`/discover/movie?with_genres=10749&`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                itens : await apiSearch(`/discover/movie?with_genres=99&`)
            }
        ]

    },
    getMovieInfo: async (movieId,type)=>{
        let info = {}
        if(movieId){
            info = await apiSearch(`/${type}/${movieId}?`)
        }
        return info
    }

}
