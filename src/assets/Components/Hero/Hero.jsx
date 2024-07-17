const Hero = () => {
  return (
    <main
      className="
      
    xl:flex 
    xl:flex-row
    xl:container
    xl:mx-auto
    items-center
    xl:justify-between
    xl:h-[calc(100vh-72px)]
    xl:p-[100px]
    flex
    flex-col
    gap-4

    "
    >
      <div
        className="
      xl:flex
      flex-col
      xl:gap-[36px]
      gap-[24px]
      flex
      

      "
      >
        <h1
          className="
      
        xl:text-[108px]
        text-[40px]
        font-Poppins
        xl:w-[595px]
        text-black
        font-semibold
        xl:leading-[102px]
        xl:text-left
        text-center
        md:text-[70px]
        lg:text-[80px]
        lg:leading-[80px]
        "
        >
          YOUR FEET DESERVE THE BEST
        </h1>
        <p
          className="
        font-semibold
        text-gray-800
        xl:max-w-[400px]
        xl:text-[16px]
        w-[350px]
        mx-auto
        xl:text-left
        xl:mx-0
        text-center
        md:text-[20px]
        md:w-[550px]
        lg:w-[750px]
      

        

        "
        >
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div
          className="
        xl:flex
        xl:gap-[40px]
        flex
        flex-row
        gap-3
        px-3
        
        "
        >
          <button
            className="
          bg-red-700
          text-white
          xl:text-[24px]
          xl:px-4
          xl:py-[6px]
          p-2
          basis-[50%]
          "
          >
            Shop now
          </button>
          <button
            className="
          bg-transparent
          border-[1px]
          border-black
          xl:text-[24px]
          xl:px-4
          xlgpy-[6px]
          font-Poppins
          p-3
          basis-[50%]
          "
          >
            Category
          </button>
        </div>

        <div>
          <p
            className="
          xl:font-[14px]
          xl:mb-2
          xl:text-left
          text-center
          "
          >
            Also Available On
          </p>
          <div
            className="
          xl:flex
          xl:justify-start
          gap-4
          flex
          justify-center
           items-centers
          "
          >
            <img src="/img/flipkart.png" alt="" />
            <img src="/img/amazon.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <img
          className="
        xl:max-w-[530px]
      
        "
          src="/img/shoe_image.png"
          alt=""
        />
      </div>
    </main>
  );
};

export default Hero;
