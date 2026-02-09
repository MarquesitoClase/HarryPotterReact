import { useState, useEffect } from "react";
import axios from "axios";
import harrypottercard from "../card/harrypottercard";

function FetchCard() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://hp-api.onrender.com/api/characters")
            .then((res) => {
                setCharacters(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando personajes...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="cards-container">
            {characters.map((char) => (
                <harrypottercard
                    key={char.id || char.name}
                    name={char.name}
                    house={char.house}
                    image={char.image}
                />
            ))}
        </div>
    );
}

export default FetchCard;