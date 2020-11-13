import {useEffect, useState} from 'react'
import Api from './services/TmdbApi'
import MovieRow from './components/movieRow/MovieRow'
import FeaturedMovie from './components/featuredMovie/FeaturedMovie'
import './App.css'
import Header from './components/header/Header'

function App() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

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


  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 10 ){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener )

    return ()=>{
      window.removeEventListener('scroll', scrollListener)
    }
  },[])
  return (
    <div className="Page">
      <Header
        black={blackHeader}
      />
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
      <footer>
        <p>Feito com <span role="img" aria-label="coração">❤</span> Por Gabriel Vieira</p>
      </footer>
        {movieList.length<=0 &&
      <div className="loading">
        <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/Netflix_LoadTime-scaled.gif" alt="Carregando"/>
      </div>
      }
    </div>
  );
}

export default App;
