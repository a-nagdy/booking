import axios from "axios";

export const initiatePayment = async () => {
  let data = JSON.stringify({
    "api_key": "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T0Rrek9UTTNMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuT3NfZ0x3UVMzOHNSR0JlSlM5VWVmZlQxMU1xc1RkSlF2dDg0Q25xaXVUS29lUTA4aGpnTTg5Uk42ZzRITVh6anhsQ2lRZ2huYzg4NXhnbjFnYzFNQkE=",
    "delivery_needed": "false",
    "amount_cents": 100,
    "currency": "EGP",
    "items": "test"
  });

  let config = {
    method: 'post',
    url: 'https://accept.paymob.com/api/auth/tokens',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    console.log('Response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw the error for the caller to handle
  }
}
