import {useState} from 'react'
import './MovieRow.css'
import { AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

function MovieRow({title, itens}){
    const [scrollX, setScrollX] = useState(-460)

    const handleLeftArrow = ()=>{
        let x = scrollX + 230
        if(x > 0){
            x = 0
        }
        setScrollX(x)

    }
    const handleRightArrow = ()=>{
        let x = scrollX - 230
        let listW = itens.results.length *230
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        }
        console.log(x)
        setScrollX(x)
        
    }
    console.log(itens.results.length )

    return(
        
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <AiOutlineLeft style={{fontSize: 40}}/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <AiOutlineRight style={{fontSize: 40}}/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: itens.results.length *230
                    }}>
                    {itens.results.length > 0 && itens.results.map((item,key)=>(
                        <div key={key} className="movieRow--item">
                            <img key={key} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>)
}

export default MovieRow
