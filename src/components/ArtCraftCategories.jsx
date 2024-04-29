const ArtCraftCategories = () => {
  return (
   <div>
    <h2 className="text-5xl font-bold text-center mt-16">All Sub Categories</h2>
     <div className="grid lg:grid-cols-3 p-12 gap-8">
      <div>
        <h3 className="text-3xl py-4">Embroidery</h3>
        <img
          className="w-96 h-72 rounded-lg"
          src="https://i.ibb.co/TMX20Yc/Embroidery.jpg"
          alt="images"
        />
        <p className="mt-3">Embroidery: This intricate craft involves decorating fabric using needle and thread. Embroiderers create beautiful patterns, motifs, and designs by stitching onto fabric.</p>
      </div>
      <div>
        <h3 className="text-3xl py-4">Knitting & Crocheting</h3>
        <img
          className="w-96 h-72 rounded-lg"
          src="https://i.ibb.co/VYWFRzB/Knitting-Crocheting.jpg"
          alt="Knitting & Crocheting"
        />
         <p className="mt-3">Knitting & Crocheting: Both knitting and crocheting involve creating fabric from yarn. Knitting uses two needles to form interlocking loops, while crocheting uses a single hook to create loops and stitches.</p>
      </div>
      <div>
        <h3 className="text-3xl py-4">Quilting</h3>
        <img
          className="w-96 h-72 rounded-lg"
          src="https://i.ibb.co/ccL9Cy6/Quilting.jpg"
          alt="Quilting"
        />
         <p className="mt-3">Quilting: Quilting is the art of sewing together layers of fabric to create a warm, padded blanket or decorative textile. Quilters often use intricate patterns and patchwork designs..</p>
      </div>
      <div>
        <h3 className="text-3xl py-4">Beadwork</h3>
        <img
          className="w-96 h-72 rounded-lg"
          src="https://i.ibb.co/c8zPWCq/Beadwork.jpg"
          alt="Beadwork"
        />
         <p className="mt-3">Beadwork: Beadwork encompasses a wide range of techniques, including bead embroidery, loom weaving, and stringing beads. Artists create jewelry, accessories, and decorative items using colorful beads.</p>
      </div>
      <div>
        <h3 className="text-3xl py-4">Tie-Dyeing</h3>
        <img
          className="w-96 h-72 rounded-lg"
          src="https://i.ibb.co/s5P5B1H/Tie-Dyeing.jpg"
          alt="Dyeing"
        />
         <p className="mt-3">Tie-Dyeing: Tie-dyeing is a fun and vibrant technique where fabric is folded, twisted, or tied before dyeing. The result is a unique, colorful pattern. It gained popularity during the hippie movement in the 1960s.</p>
      </div>
      <div>
        <h3 className="text-3xl py-4">Macrame</h3>
        <img
          className="w-96 h-72 rounded-lg"
          src="https://i.ibb.co/85L4zKd/Macrame.jpg"
          alt="Macrame"
        />
         <p className="mt-3">Macrame: Macrame involves knotting cords or threads to create decorative items like plant hangers, wall hangings, and jewelry. The intricate knots form beautiful patterns.</p>
      </div>
    </div>
   </div>
  );
};

export default ArtCraftCategories;
