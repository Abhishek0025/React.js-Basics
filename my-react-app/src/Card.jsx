import profilePic from './assets/A1.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Abhishek A</h2>
            <p className="card-text">I make websites and I like playing video games.</p>
        </div>
    );
}

export default Card;