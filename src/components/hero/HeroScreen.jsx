import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

    /* para leer los parámetros de la URL
        *: path
        arg: argumento recibido    
    */

    /* 
    hacer la redireccion cuando es posible: Navigate 
    */
    const { heroId } = useParams();
    const navigate = useNavigate();

   /*  const hero = getHeroById( heroId ); */

    /* const hero = useMemo(() => {
        return getHeroById(heroId)
    }, [heroId]) */

    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    if (!hero) {
        return <Navigate to="/" />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
     } = hero;

    const handleReturn = () => {
        /* publisher.includes('Marvel')? navigate('/marvel') : navigate('/dc'); */
        navigate(-1);
    }

    const imgPath = `/assets/${ id }.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ imgPath }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__bounceInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group">
                    <li className="list-group-item"><b>Alter ego: </b>{ alter_ego }</li>
                    <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
                    <li className="list-group-item"><b>First Appearance: </b>{ first_appearance }</li>
                </ul>

                <h5 className="mt-4">Characters</h5>
                <p>{ characters }</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={ handleReturn }
                >
                    Volver
                </button>
            </div>
        </div>
    )
}
