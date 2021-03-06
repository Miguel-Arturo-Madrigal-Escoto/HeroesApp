
import { Link } from 'react-router-dom';
import '../../css/hero-card.css';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    return (
        <div className="container-card">
            <Link to={`/hero/${id}`} className="my-card mt-3 mb-4 animate__animated animate__bounceInRight">
                <img src={`https://miguel-arturo-madrigal-escoto.github.io/HeroesApp/assets/${id}.jpg`} className="img img-responsive" alt={superhero}/>
                <div className="profile-name">{superhero}</div>
                <div className="profile-position">{alter_ego}</div>
                <div className="profile-overview">
                    <div className="profile-overview">
                        <div className="row">
                            <div className="col-ms-4">
                                <h3>{publisher}</h3>
                                <p>Primera aparición: <br />{first_appearance}</p>
                                {
                                    (alter_ego !== characters)
                                    && <p>{characters}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
