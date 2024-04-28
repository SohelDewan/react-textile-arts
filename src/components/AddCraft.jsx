import Swal from "sweetalert2";

const AddCraft = () => {
  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemname = form.itemName.value;
    const Subcategory_Name = form.Subcategory_Name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stockStatus.value;
    const User_Email = form.User_Email.value;
    const User_Name = form.User_Name.value;
    const photo = form.photo.value;
    const newCraft = {
      itemname,
      Subcategory_Name,
      short_description,
      price,
      customization,
      processing_time,
      stockStatus,
      User_Email,
      User_Name,
      photo,
    };
    console.log(newCraft);
    form.reset();
    // to send data to the server
    fetch("https://b9-assaignment10-server-8s0z516ui.vercel.app/craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your file has been added.",
            icon: "success",
            confirmButtonText: "Added",
          });
        }
      });
  };

  return (
    <div className="text-center bg-[#F4F3F0] p-4 lg:p-16">
      <h2 className=" font-bold md:text-5xl mb-2">Add Craft </h2>

      <form onSubmit={handleAddCraft}>
        <div className="md:flex gap-5 p-4 ">
          <div className="form-control flex  gap-2 lg:w-1/2 mb-3">
            <label className=" text-start">Item Name:</label>
            <input
              type="text"
              name="itemName"
              className="w-full input input-bordered"
              placeholder="Item Name"
            />
          </div>
          <div className="form-control flex  gap-2 lg:w-1/2 md:ml-5 mb-3">
            <label className=" text-start">
              Subcategory_Name:
              <input
                type="text"
                name="Subcategory_Name"
                className="w-full input input-bordered"
                placeholder="subcategory_Name"
              />
            </label>
          </div>
        </div>
        {/* Short description */}
        <div className="md:flex gap-5 p-4 ">
          <div className="form-control flex  gap-2 lg:w-1/2 mb-3">
            <label className="text-start">Short description:</label>
            <input
              type="text"
              name="short_description"
              className="w-full input input-bordered "
              placeholder=" short description"
            />
          </div>
          <div className="form-control flex  gap-2 lg:w-1/2 md:ml-5 mb-3">
            <label className=" text-start">Price:</label>
            <input
              type="number"
              name="price"
              className="w-full input input-bordered"
              placeholder="Price"
            />
          </div>
        </div>
        {/* Category and Details */}
        <div className="md:flex gap-5 p-4 ">
          <div className="form-control  flex  gap-2 lg:w-1/2 mb-3">
            <label className="text-start">customization:</label>
            <input
              type="text"
              name="customization"
              className="w-full input input-bordered"
              placeholder="customization"
            />
          </div>
          <div className="form-control flex  gap-2 lg:w-1/2 md:ml-5 mb-3">
            <label className="text-start">processing_time:</label>
            <input
              type="time"
              name="processing_time"
              className="w-full input input-bordered"
              placeholder="processing_time"
            />
          </div>
          <div className="form-control flex  gap-2 lg:w-1/2 md:ml-5 mb-3">
            <label className="text-start">stockStatus:</label>
            <input
              type="text"
              name="stockStatus"
              className="w-full input input-bordered"
              placeholder="stockStatus"
            />
          </div>
          <div className="form-control flex  gap-2 lg:w-1/2 md:ml-5 mb-3">
            <label className="text-start">User Email:</label>
            <input
              type="email"
              name="User_Email"
              className="w-full input input-bordered"
              placeholder="User_Email"
            />
          </div>
          <div className="form-control flex  gap-2 lg:w-1/2 md:ml-5 mb-3">
            <label className="text-start">User Name:</label>
            <input
              type="text"
              name="User_Name"
              className="w-full input input-bordered"
              placeholder="User_Name"
            />
          </div>
        </div>
        {/* Photo */}
        <div className=" ">
          <div className="form-control flex  gap-2 p-4">
            <label className="text-start">
              <span>Photo:</span>
            </label>
            <input
              type="text"
              name="photo"
              className="w-full input input-border"
              placeholder="Enter photo URL"
            />
          </div>
        </div>
        <input
          type="submit"
          value="ADD"
          className="btn btn-block bg-[#1A4D2E] text-white"
        />
      </form>
    </div>
  );
};

export default AddCraft;
