import { useEffect } from "react";

function Card(props) {
    let {id, name, weight, height, types, sprites} = props.pokemons;
    weight = `${weight / 10} kg`;
    height = `${height / 10} m`;
    const image = sprites.other['official-artwork'].front_default;

    useEffect(() => {
        props.isRendered(props.indexItem); 
    }, [])
    

  return (
    <article className={`pokemons__item ${types[0].type.name}`}>
        <div className="pokemons__aside">
            <img width="200" src={image} alt={name} className="pokemons__image" loading="lazy" />
            <span className="pokemons__id">#{id}</span>
        </div>
        <div className="pokemons__body">
            <h2 className="pokemons__title">{name}</h2>
            <div className="pokemons__types types">
                {types.map((type, index) => {
                    return(
                        <span key = {`${JSON.stringify(type.type.name)}-${index}`} className={`types__item ${type.type.name}`}>
                            {type.type.name}
                        </span>
                    );
                })}
            </div>
            <div className="pokemons__physical physical">
                <div className="physical__warp">
                    <p className="physical__value--weight">{weight}</p>
                    <p className="physical__name">Weight</p>
                </div>
                <div className="physical__warp">
                    <p className="physical__value--height">{height}</p>
                    <p className="physical__name">Height</p>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Card