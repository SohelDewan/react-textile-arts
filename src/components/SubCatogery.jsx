const SubCatogery = () => {
  return (
    <div className="p-12">
      <div className="lg:flex mt-12 animate__lightSpeedInLeft animate__animated ">
        <img
          className="w-1/2"
          src="https://textileartscenter.com/wp-content/uploads/2020/09/Social-Share-Image-1125x956.png"
        />
        <div className="w-1/2 p-4 bg-[#F5EFE6]">
          <h2 className="text-2xl md:text-5xl my-8">Support TAC through Patreon!</h2>
          <p className="text-xl my-8 ">
            TAC needs your help. If you believe in the work we do, in the
            artists we support, and the 2krnmevk2at.comprograms we offer,
            consider becoming a Patreon donor to help us survive through this
            pandemic recession.
          </p>
        </div>
      </div>
      <div className="lg:flex animate__lightSpeedInRight animate__animated">
        <div className="w-1/2 p-12 bg-[#4F6F52] text-white">
          <h2 className="text-2xl md:text-5xl my-8">Artist Opportunities</h2>
          <p className="text-xl my-8 ">
            Through TAC, artists are able to advance their work, actively pursue
            their career ambitions, foster connections within the textile art
            community and share their knowledge outside of the studio walls.
          </p>
        </div>
        <img
          className="w-1/2"
          src="https://textileartscenter.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-27-at-9.31.08-PM-1125x956.png"
        />
      </div>
    </div>
  );
};

export default SubCatogery;
