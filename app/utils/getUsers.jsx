import axios from "axios";

export const getReservationData = async () => {
    try {
        const response = await axios.post('https://data.mongodb-api.com/app/data-lulhv/endpoint/data/v1/action/find', {
            collection: 'User',
            database: 'reservation',
            dataSource: 'Cluster0',
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': 'Rx0amBC5x5a6aWO3upBM8E3Gcwsnsn5reM1zvUsvXyZJCHnmkus2mds1HqPcGOAd',
            },
        });

        return response.data.documents || [];
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
};