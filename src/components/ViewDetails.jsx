import { useLoaderData } from "react-router-dom";
import Estate from "./ProductDetails";


const ViewDetails = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div className="container mx-auto">
            {
                data.map(est => <Estate key={est._id} data={est}></Estate>)
            }
        </div>
    );
};

export default ViewDetails;