import { useState, useEffect } from "react";

function useAnimateTemperature(temperature, increseNumber) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count < temperature) {
                setCount(prevCount => prevCount + (increseNumber + 0.3))
            } else {
                setCount(temperature)
            }
        }, 1);
        return () => clearTimeout(timer)
    }, [count]);

    return { count }
}

export default useAnimateTemperature;