import { initiatePayment } from "@/app/utils/paymobFirstStep";

const page = async () => {

    try {
        const data = await initiatePayment();
        console.log('test', data.profile.id);
    } catch (error) {
        console.log(error)
    }

    return (
        <div>page</div>
    )
}

export default page