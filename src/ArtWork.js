
export default function ArtWorkChoice (props) {
    const {artwork} = props;
    const { title, id, artist_display, date_display, image_id } = artwork;

    function onSelect(){
        //passes the selected id onto the next phase, which is EndCreation
    }
   

    return (
        <div className="artinfo" key={id}>
            <h3>{title}</h3>
            <p>artist: {artist_display}, date: {date_display} </p> 
            <button onClick={onSelect} id={id}>Select this piece of art</button>
            <img src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}/>
        </div>
    )
}


/* 

src={`https://www.artic.edu/iiif/2/{id}/full/843,/0/default.jpg`}

    const [artwork, setArtwork] =  useState([]);

    const fetchArtwork = () => {
        fetch("https://api.artic.edu/api/v1/artworks/24645/")
            .then(response => {
                return response.json()
            })
            .then(data => 
                setArtwork(data))
    }

    useEffect(() => {
        fetchArtwork()
    }, [])


an attempt to display data, and I know it's wrong
       {artwork.length > 0 && (
        <ul>
          {artwork.map(artwork => (
            <li key={artwork.id}>{artwork.title}</li>
          ))}
        </ul>
      )}


*/