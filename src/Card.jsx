import "./card.css"

function Card(props) {
  const { name, img, caption, desc, weather } = props

  return (
    <div className="card">
    <h2>{name}</h2>
      <img src={img} />
    <p>{caption}</p>
      <p></p>
      {desc}
    <p>{weather}</p>
    </div>
  )
}

export default Card