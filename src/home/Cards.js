import one from "../assets/images/2.jpeg"
import two from "../assets/images/1.jpeg"

const Cards = () => {
    const images = [
        {
            src:one,
            h3:"The power of trees",
            content:"Discover many benefits trees provide in our community and around the globe.", 
            alt:"leaves", 
            id:1
        },
        {
            src:one, 
            h3:"Take Action",
            content:"Explore all the ways you can make a difference for the nation and the globe.",
            alt:"planting", 
            id:2
        },
        {
            src:two, 
            h3:"Inspiration",
            content:"We inspire people to plant, nurture and celebrate trees.",
            alt:"inspire", 
            id:3
        }
    ]

    return ( 
        <div className="cards">
            {images.map( image => (
                <div>
                    <img src={image.src} alt={image.alt} />
                    <aside className="card-content">
                        <h3> {image.h3} </h3>
                        <p> {image.content} </p>
                        <button>Learn More</button>
                    </aside>
                </div>
            ))}
        </div>
     );
}
 
export default Cards;