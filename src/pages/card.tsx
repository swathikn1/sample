function Card1({title,description}:{title:string;description:string}) {
    return (
        <div className="card">
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
    )
}

export default Card1;