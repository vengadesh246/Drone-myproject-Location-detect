
import { useEffect, useState, useRef } from 'react';

const useWebSocket = (url) => {
    const [data, setData] = useState(null);
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket(url);

        ws.current.onopen = () => {
            console.log('WebSocket connection established');
        };

        ws.current.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setData(message);
        };

        ws.current.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            ws.current.close();
        };
    }, [url]);

    return data;
};

export default useWebSocket;
