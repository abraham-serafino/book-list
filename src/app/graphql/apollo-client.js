import { useMemo, useState } from 'react';
import axios from 'axios';

export default function useApollo() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const query = async ({ query, variables }) => {
        setIsLoading(true);

        try {
            const result = await axios.post('http://localhost:3000', {
                headers: {
                    'content-type': 'application/json',
                },
                data: { query, variables },
            });

            setData(result.data?.data);
        } catch (e) {
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    return useMemo(
        () => ({
            query,
            isLoading,
            error,
            data,
        }),
        [isLoading, error, data],
    );
}
