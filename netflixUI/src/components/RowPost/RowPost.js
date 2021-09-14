import axios from '../../axios'
import React,{ useEffect,useState } from 'react'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {

    const [movie, setMovie] = useState([])
    const [id, setId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response => {

            setMovie(response.data.results)

        }).catch(err => {

            // eslint-disable-next-line 
        })
        // eslint-disable-next-line 
    }, [])
    const opts = {
        height: '390',
        width: '50%',
        hover: '1.01',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    const handleMovie = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                setId(response.data.results[0])


            }
        })
    }
    return (
        <div className='row'>

            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj) =>

                    <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />

                )}
            </div>
            {id && <Youtube videoId={id.key} opts={opts} />}
        </div>







    )
}

export default RowPost
