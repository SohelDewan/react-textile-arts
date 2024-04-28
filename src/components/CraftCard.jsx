/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CraftCard = ({ craft, crafts, setCrafts }) => {
  const {
    _id,
    itemname,
    Subcategory_Name,
    short_description,
    price,
    customization,
    processing_time,
    photo,
    stockStatus,
    User_Name,
    User_Email,
  } = craft;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9-assaignment10-server-8s0z516ui.vercel.app/craft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              {
                // eslint-disable-next-line react/prop-types
                const remaining = crafts.filter((crf) => crf._id !== _id);
                setCrafts(remaining);
              }
            }
          });
      }
    });
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure >
        <img className="rounded-xl h-[50vh]" src={photo} />
      </figure>
      <div className="flex justify-between w-full lg:px-4">
        <div className="lg:ml-3 p-2 lg:p-4">
          <h2 className="card-title">{itemname}</h2>
          <p>{Subcategory_Name}</p>
          <p>{short_description}</p>
          <p>{price}</p>
          <p>{customization}</p>
          <p>{processing_time}</p>
          <p>{stockStatus}</p>
          <p>{User_Name}</p>
          <p>{User_Email}</p>
        </div>
        <div className="join join-vertical space-y-2 pt-8 pr-1 lg:pt-10 ">
        <Link to={`/craft/${_id}`}>

          <button className="btn w-20 join-item bg-[#1A4D2E] text-white">
            View
          </button>
        </Link>
          <Link to={`/update-craft/${_id}`}>
            <button className="btn w-20 join-item bg-[#4F6F52] text-white">
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn w-20 join-item bg-[#E8DFCA] text-white"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;
