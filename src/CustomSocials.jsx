import './customSocials.css';

function CustomSocials( {pfpsrc, name, location, bio, linkedin, github, insta, bgcolor} ) {

    return(
        <div className="custom-socials" style={{backgroundColor: bgcolor}}>
            <img id="user-pic" src={pfpsrc}></img>
            <h1 id="name">{name}</h1>
            <h3 id="location">{location}</h3>
            <p id="status">{bio}</p>

            <ul class='profile-links'>
                <li>
                    <a href={linkedin} target='blank'>LinkedIn</a>
                    </li>
                <li>
                    <a href={github} target='blank'>GitHub</a>
                    </li>
                <li>
                    <a href={insta} target='blank'>Instagram</a>
                    </li>
            </ul>
        </div>
    );
}

export default CustomSocials;
