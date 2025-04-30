import { useState, useEffect } from "react";

const useAffichageVols = (limit = null) => {
    const [vols, setVols] = useState([])

    useEffect(() => {
        fetch('http://localhost:9000/vols')
        .then((res) => {return res.json()})
        .then((donner) => {
            const result = limit ? donner.slice(0, limit) : limit;
            setVols(result)
        })
    }, [limit])

    return { vols }
}

export default useAffichageVols;