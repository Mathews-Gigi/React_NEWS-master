import image from '../assets/News.jpg'

const NewsItem = ({title, description, src, url}) => {
    return (
    <div className="card bg-dark text-light cols cols-cols-3 row-cols-md-15 g-3 d-inline-block my-2 mx-2 px-2 py-2 mb-3 " style={{ maxWidth: "320px" }}>
            <img src={src?src:image} style={{height:"200px" ,width:"300px", objectFit:"cover"}} className="card-img-top" alt="News"/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description? description.slice(0,90):"News is current event. It is information about something that has just happened."}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
    )
}

export default NewsItem