const Card = (props) => {
    return (  
<div className="d-inline-block">
<div className="card m-2" style={{
  width: "18rem"
  }}>
  <img className="card-img-top" src={props.srcUrl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Shop now!</a>
  </div>
  </div>
</div>  
    );
}
 
export default Card;


