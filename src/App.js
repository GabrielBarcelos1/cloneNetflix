import {useEffect, useState} from 'react'
import Api from './services/TmdbApi'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import './App.css'

function App() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(()=>{
    const loadAll = async ()=>{
      let list = await Api.getHomeList()
      setMovieList(list)
      let originals = list.filter(i=>i.slug === 'originals')
      let randomchosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1))
      let chosen = originals[0].itens.results[randomchosen]
      let chosenInfo = await Api.getMovieInfo(chosen.id,'tv')
  
      setFeaturedData(chosenInfo)
    }
    loadAll()
  },[])
  return (
    <div className="Page">
      {featuredData &&
        <FeaturedMovie 
          item={featuredData}
        />
      }
      <section className="movieList">
        {movieList.map((movieList, key) =>{
          return <MovieRow
                key={key}
                title={movieList.title}
                itens={movieList.itens}
            />
        })}
      </section>
    </div>
  );
}

export default App;
