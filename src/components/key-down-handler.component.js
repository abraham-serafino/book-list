import { useEffect, useState } from 'react';

// #forms_suck
export default function KeyDownHandler({ children, onKeyDown }) {
    const [handlerMutex, setHandlerMutex] = useState(false);

    const handleKeyDown = (e) => {
        // Prevent the event handler from being called when it is first added
        if (handlerMutex) {
            onKeyDown(e);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        setHandlerMutex(true);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return <div onKeyDown={onKeyDown}>{children}</div>;
}
