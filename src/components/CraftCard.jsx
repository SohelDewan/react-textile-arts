/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CraftCard = ({craft, crafts, setCrafts}) => {

    const {
        _id,
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
            
            fetch(`http://localhost:5000/craft/${_id}`,{
                method: 'DELETE'
            })
              .then(res => res.json())
              .then((data) => {
                console.log(data);
                if(data.deletedCount > 0) {
                    Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                         "success"
                      );
                    {
                      // eslint-disable-next-line react/prop-types
                      const remaining = crafts.filter(crf=> crf._id !==_id);
                      setCrafts(remaining);
                    }
                }
              });
          }
        });
      };
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
            onClick={() => handleDelete(_id)}
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