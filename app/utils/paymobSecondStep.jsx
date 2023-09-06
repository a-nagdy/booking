import axios from "axios";

export const SecondStep = async () => {
    let data = JSON.stringify({
        "auth_token": "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T0Rrek9UTTNMQ0p3YUdGemFDSTZJak5tWTJabE5qa3hNVFJpTXpneE1UWmtOakl6TlRnMVpUZ3pZV05tWldVd01EVXlaakl5TURBMFpUZzFabVU0TUdabVlqSXlPR05sWXpnMFpqRmtOelFpTENKbGVIQWlPakUyT1RNNU9UTTNPVEY5Lmd6LU9jNWJzMlphWHJiRWdKdWQxQ1Bwb3J6VUhLVXh3Yk15SUhaeXZzc2FVM05weGloSkJhQkl4V3B2S0l5N1ZXYkFweE5CbHNWYmFXMTR5dXRYcUJB",
        "delivery_needed": "false",
        "amount_cents": 100,
        "currency": "EGP",
        "items": []
    });

    let config = {
        method: 'post',
        url: 'https://accept.paymob.com/api/auth/tokens',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}
