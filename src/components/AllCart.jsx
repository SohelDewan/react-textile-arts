import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";


const AllCart = () => {

    const loadedCrafts = useLoaderData();
    const [crafts, setCrafts] = useState(loadedCrafts);
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 p-4">
        {crafts.map((craft) => (
          <CraftCard
            key={craft._id}
            craft={craft}
            crafts={crafts}
            setCrafts={setCrafts}
          ></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default AllCart;
