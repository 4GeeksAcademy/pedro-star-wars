import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import { FavoritesContext } from '../contexts/Favorites';
import { useContext } from 'react';



const MyCard = ({ cardTitle, cardText, group, uid }) => {
  const { favorites, deleteFavorite, addToFavorites } = useContext(FavoritesContext)

  const isFavorited = (id, type) => {
    return favorites.some((favorite) => {
      return favorite.id === id && favorite.type === type
    })
  }

  const navigate = useNavigate()
  return (<Card className='w-25 flex-shrink-0'>
    <Card.Img variant="top" src="https://placehold.co/600x400" />
    <Card.Body>
      <Card.Title>{cardTitle}</Card.Title>
      <Card.Text>
        {cardText}
      </Card.Text>
      <Button onClick={() => navigate(`/details/${group}/${uid}`)} variant="primary">Go somewhere</Button>
      <Button onClick={() => {
        if (isFavorited(uid, group)) { deleteFavorite(uid, group)
          console.log(favorites)  }
        
           else{
            addToFavorites(uid, cardTitle, group)
             
        }


    }}>{isFavorited(uid, group) ? "❤️" : "🤍"}</Button>
  </Card.Body>
      </Card >)
}

export default MyCard