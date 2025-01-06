import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import {Button} from 'react-bootstrap'
import { useParams } from "react-router";




const text="Here is suppose to appear a short description I expected to find in the API but it seems I was wrong. So this text is a placeholder"


const DetailsPage = () => {
 const navigate=useNavigate()
 let { group,object } = useParams();
 let [properties, setProperties] = useState({})

  useEffect( ()=>{fetch(`https://www.swapi.tech/api/${group}/${object}`)
  .then((resp)=>resp.json())
  .then((resp)=>{console.log(resp)
    setProperties(resp.result.properties)
  })

  },[])


    return (<>
 <>
    <div className="container d-flex align-items-start mt-4">

      <div className="w-50">
        <img src="https://placehold.co/600x400" className="img-fluid rounded" alt="Imagen" />
      </div>

      <div className="w-50 pl-4">
        <h3 className="mb-3">{properties.name}</h3>
        <p>
      {text}
        </p>

        <div>
      <h2>Properties</h2>
      <ul>
        {Object.entries(properties).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>


        <Button onClick={()=>navigate(`/`)} variant="primary">Return</Button>
      </div>
    </div>
  </>



    </>
    )
}

export default DetailsPage