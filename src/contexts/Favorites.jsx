import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';


export const FavoritesContext = React.createContext({


});

export const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);

	const deleteFavorite = (id, type) => {
		setFavorites(favorites.filter(obj => !(obj.type === type && obj.id === id)))
	}

	const addToFavorites = (id, name, type) => {

		if (!favorites.some(fav => fav.id === id && fav.type === type)) {
		  setFavorites([...favorites, { id, name, type }]);
		}
	  };

	return (
		<FavoritesContext.Provider value={{
			favorites, setFavorites, addToFavorites, deleteFavorite
		}}>
			{children}
		</FavoritesContext.Provider>
	);
}