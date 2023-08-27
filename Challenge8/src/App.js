import { useState} from "react";

function useGeolocation(click) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [position, setPosition] = useState({});

    function getPosition() {

        if (!navigator.geolocation)
            return setError("Your browser does not support geolocation");

        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                });
                setIsLoading(false);
            },
            (error) => {
                setError(error.message);
                setIsLoading(false);
            }
        );
    }


    return {error, isLoading, position,getPosition};
}

export default function App() {
    const {isLoading, error, position,getPosition} = useGeolocation();
    const [countClicks, setCountClicks] = useState(0);
    const {lat, lng} = position;

    function handleClicks() {
        getPosition();
        setCountClicks((count) => count + 1);
    }


    return (
        <div>
            <button onClick={handleClicks} disabled={isLoading}>
                Get my position
            </button>

            {isLoading && <p>Loading position...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && lat && lng && (
                <p>
                    Your GPS position:{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
                    >
                        {lat}, {lng}
                    </a>
                </p>
            )}

            <p>You requested position {countClicks} times</p>
        </div>
    );
}
