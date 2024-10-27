import './customCard.css';

function CustomCard( {topic, date, title, content, author, pfpsrc, bgcolor} ) {

    return(
        <div className="custom-card" style={{backgroundColor: bgcolor}}>

            <img id="card-pic" src="/illustration-article.svg"></img>

            <p id="topic">{topic}</p>
            <p id="date">Published {date}</p>
            <h1 id="title">{title}</h1>
            <p id="content">{content}</p>

            <div class="post-author">
                <img id='user-pic' src={pfpsrc} ></img> 
                <p id="author">{author}</p>
            </div>
        </div>
    );
}

export default CustomCard;
