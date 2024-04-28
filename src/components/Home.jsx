import { useLoaderData } from "react-router-dom";
import Slider from "../Slider";
import CraftCard from "./CraftCard";
import { useState } from "react";

const Home = () => {
  const loadedCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCrafts);

  return (
    <div className="bg-[#F5EFE6]">
      <Slider></Slider>
      <h2 className="text-center text-2xl md:text-5xl my-12">
        Collection of Textile Arts and Crafts
      </h2>

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

export default Home;
