import ArtListItem from "./ArtListItem"
import { useState, useEffect} from "react"

export default function ArtList () {
    const [art, setArt] = useState([])

    useEffect(() => {
        const fetchArt = async () => {
          try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/art`)
            if(!response.ok){
                throw Error("Couldn't fetch art data")
            }
            const data = await response.json()
            setArt(data)
          } catch (error) {
            console.error("Error fetching the art:", error)
          }
        }
    
        fetchArt()
      }, [])

    return(
        <ul className="art-list">
            {art.map((arts, index) =>
            <ArtListItem
                key={arts.id}
                title={arts.title}
                artist={arts.artist}
                imageURL={arts.imageURL}
                publicationHistory={arts.publicationHistory}
            />
            )
            }
        </ul>
    )
}