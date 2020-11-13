import './FeaturedMovie.css'

function FeaturedMovie({item}){
    let firstDate = new Date(item.first_air_date);
    let year  = firstDate.getFullYear()
    let genres = []
    let description = item.overview
    if(description.length > 300){
        description = description.substring(0, 300)+" ..."
    }
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }
    return(
        
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition : 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                {console.log(item)}
                <div className="featured--horizontal">
                <div className="featured--name">{item.original_name}</div>
                <div className="featured--info">
                    <div className="featured--points">{item.vote_average} pontos</div>
                    <div className="featured--year">{year}</div>
                    <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons>1 ? 's' : ''}</div>
                </div>
                <div className="featured--description">{description}</div>
                <div className="featured--buttons">
                    <a href={`/watch/${item.id}`} className="featured--watchbutton"> ▶ Assistir</a>
                    <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>

                </div>
                 <div className="featured--genres"><strong>Gênero:</strong>{genres.join(', ')}</div> 
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie