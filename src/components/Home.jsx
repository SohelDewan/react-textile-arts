import { useLoaderData } from "react-router-dom";
import Slider from "../Slider";
import CraftCard from "./CraftCard";
import { useState } from "react";

const Home = () => {
  const crafts = useLoaderData();
  const [craft, setCraft] = useState();

  return (
    <div>
      <Slider></Slider>
      <h2 className="text-center text-5xl mt-8">
        Collection of Textile Arts and Crafts:{craft.length}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {crafts.map((craft) => (
          <CraftCard
            key={craft._id}
            craft={craft}
            crafts={craft}
            setCraft={setCraft}
          ></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
