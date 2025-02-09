import MyCard from '../components/Card.jsx'
import { useEffect } from 'react'
import { useState } from 'react'
import { data } from 'react-router'
import { FavoritesContext } from '../contexts/Favorites.jsx'
import { useContext } from 'react'





const LandingPage = () => {


    let [peopleList, setpeopleList] = useState([])
    let [planetList, setplanetList] = useState([])
    let [speciesList, setspeciesList] = useState([])

    const {favorites,deleteFavorite,addToFavorites}=useContext(FavoritesContext)

const isFavorited=(id,type)=>{
    return favorites
}


    useEffect(() => {
        fetch("https://ubiquitous-space-pancake-rx44x54wpv6cxp65-3000.app.github.dev/character",{ method: "GET" })
            .then((res) => res.json())
            .then((data) => {setpeopleList(data.content)
                console.log(data.content)
            })
            .catch((err) => console.error(err))

        fetch("https://ubiquitous-space-pancake-rx44x54wpv6cxp65-3000.app.github.dev/planet",{ method: "GET" })
            .then((res) => res.json())
            .then((data) => setplanetList(data.content))
            .catch((err) => console.error(err))

        fetch("https://ubiquitous-space-pancake-rx44x54wpv6cxp65-3000.app.github.dev/species",{ method: "GET" })
            .then((res) => res.json())
            .then((data) => setspeciesList(data.content))
            .catch((err) => console.error(err))

    }, [])

    return (<>
        <div className='container mt-4'>
            <h1 className="text-center">CHARACTERS</h1>
            <div className="d-flex gap-3 overflow-auto mb-5">
                {peopleList.map((person) => {
                    return (
                        <MyCard group="people" uid= {person.uid} cardTitle={person.name} cardText=""></MyCard>
                    )
                })}
            </div>
        </div>

        <div className='container mt-4'>
        <h1 className="text-center">PLANETS</h1>
            <div className="d-flex gap-3 overflow-auto mb-5">
                {planetList.map((planet) => {
                    return (
                        <MyCard group="planets"  uid= {planet.uid} cardTitle={planet.name} cardText=""></MyCard>
                    )
                })}
            </div>
        </div>

        <div className='container mt-4'>
        <h1 className="text-center">SPECIES</h1>
            <div className="d-flex gap-3 overflow-auto mb-5">
                {speciesList.map((species) => {
                    return (
                        <MyCard group="species" uid= {species.uid} cardTitle={species.name} cardText=""></MyCard>
                    )
                })}
            </div>
        </div>


    </>)

}

export default LandingPage