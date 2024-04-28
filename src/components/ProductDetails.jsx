import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { _id } = useParams();
  const crafts = useLoaderData();
  const singleCraft = crafts.find((e) => e._id === _id);
  // console.log(singleEstate);
  return (
    <>
      <div className="container mx-auto animate__animated animate__backInDown">
        <h2 className="text-5xl my-5 ">Product Name: {singleCraft.itemname}</h2>
        <div className="flex">
            <img className="w-3/5 h-[80vh] rounded-lg mb-5" src={singleCraft.photo} />
            <div className="w-2/5 h-[80vh] bg-[#F5EFE6] p-4">
              <div className="ml-5 p-5 rounded-xl space-y-8 ">
                <h4 className="text-xl uppercase ">
                  <span className="text-[#4F6F52] pr-2">price:</span>
                  {singleCraft.price}
                </h4>
                <h4 className="text-xl uppercase">
                  <span className="text-[#4F6F52] pr-2">Subcategory_Name:</span>
                  {singleCraft.Subcategory_Name}
                </h4>
                <h4 className="text-xl lowercase ">
                  <span className="text-[#4F6F52] pr-2 uppercase">short_description:</span>
                  {singleCraft.short_description}
                </h4>
                <h4 className="text-xl uppercase">
                  <span className="text-[#4F6F52] pr-2">stockStatus:</span>
                  {singleCraft.stockStatus}
                </h4>
                <h4 className="text-xl uppercase">
                  <span className="text-[#4F6F52] pr-2">customization:</span>
                  {singleCraft.customization}
                </h4>
                <h4 className="text-xl lowercase">
                  <span className="text-[#4F6F52] pr-2 uppercase">processing_time:</span>
                  {singleCraft.processing_time}
                </h4>
                <h4 className="text-xl lowercase">
                  <span className="text-[#4F6F52] pr-2 uppercase">User_Name:</span>
                  {singleCraft.User_Name}
                </h4>
                <h4 className="text-xl lowercase">
                  <span className="text-[#4F6F52] pr-2 uppercase">User_Email:</span>
                  {singleCraft.User_Email}
                </h4>
              </div>
            </div>
          </div>

        <p className="mt-8 leading-10">
        Textile arts are arts and crafts that use plant, animal, or synthetic fibers to construct practical or decorative objects.

Textiles have been a fundamental part of human life since the beginning of civilization. The methods and materials used to make them have expanded enormously, while the functions of textiles have remained the same, there are many functions for textiles. Whether it be clothing or something decorative for the house/shelter. The history of textile arts is also the history of international trade. Tyrian purple dye was an important trade good in the ancient Mediterranean. The Silk Road brought Chinese silk to India, Africa, and Europe, and, conversely, Sogdian silk to China. Tastes for imported luxury fabrics led to sumptuary laws during the Middle Ages and Renaissance. The Industrial Revolution was shaped largely by innovation in textiles technology: the cotton gin, the spinning jenny, and the power loom mechanized production and led to the Luddite rebellion.
        </p>
      </div>
    </>
  );
};

export default ProductDetails;
