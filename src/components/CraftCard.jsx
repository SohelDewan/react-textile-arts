/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CraftCard = ({craft}) => {

    const {
        itemname,
        Subcategory_Name,
        short_description,
        price,
        customization,
        processing_time,
        // stockStatus,
        // User_Email,
        // User_Name,
        photo,
      } = craft;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} />
      </figure>
      <div className="flex justify-between w-full lg:px-4">
        <div className="lg:ml-3 p-2 lg:p-4">
          <h2 className="card-title">{itemname}</h2>
          <p>{Subcategory_Name}</p>
          <p>{short_description}</p>
          <p>{price}</p>
          <p>{customization}</p>
          <p>{processing_time}</p>
        </div>
        <div className="join join-vertical space-y-2 pt-3 pr-1 lg:pt-2 ">
          <button className="btn join-item bg-[#1A4D2E] text-white">
            View
          </button>
        <Link
        //  to={`updateCoffee/${_id}`}
         >
        <button className="btn w-20 join-item bg-purple-600 text-white">
            Edit
          </button>
        </Link>
          <button
            // onClick={() => handleDelete(_id)}
            className="btn join-item bg-red-600 text-white"
          >
            X
          </button>
        </div>
      </div>
    </div>
    );
};

export default CraftCard;