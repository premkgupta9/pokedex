import './Pokemon.css';
import { Link } from 'react-router-dom'

function Pokemon ({name, url, id}) {
    return (
        <Link to={`/pokemon/${id}`} className='poke-wrapper'>
        <div className='poke'>
            <div className='poke-name'> {name} </div>  
            <img className='poke-image' src= {url} />
        </div>
        </Link>
    )
}

export default Pokemon;