
const App = () => {
  return (
    <>
      <h1 className="font-inter-tight font-medium py-3 text-base text-thrindle-yellow text-center">
        OUR PRODUCTS
      </h1>

      <p className="font-inter-tight font-medium px-4 py-5 text-5xl text-thrindle-deep-blue text-center">
        Everything you're looking for in a <br></br> modern e-commerce powerhouse
      </p>

      {/* Thrindle Business Section */}
      <div className="cursor-auto group grid grid-cols-2 container md:w-full mt-24 mb-8 rounded-lg overflow-hidden bg-thrindle-blue hover:bg-opacity-10 transition ease-in-out delay-75 h-[36rem]">
        <div className="group w-full h-full relative content-center">
          <div className="grid grid-auto-rows-max gap-4">
            <div className="mx-16 content-end relative">
              <img className="aspect-auto opacity-100 group-hover:opacity-0 duration-500" src="../src/assets/thrindle-business-1.svg" alt="thrindle business logo"></img>
              <img className="absolute top-0 left-0 aspect-auto opacity-0 group-hover:opacity-100 duration-500" src="../src/assets/thrindle-business-2.svg" alt="thrindle business logo"></img>
            </div>

            <p className="aspect-auto content-center mx-16 font-inter font-semibold text-white group-hover:text-black duration-500">
              Thrindle Business is a business solution uniquely <br></br> placed to unlock competitive and speedy <br></br>procurement for everyday businesses.
            </p>

            <div className="flex items-center space-x-4 h-12 w-48 mx-16">
              <button className="flex items-center justify-center w-48 h-12 text-base text-white rounded-lg bg-thrindle-blue duration-100 border-[0.1rem] font-bold group-hover:border-none">
                <span className="mr-2">
                  View website
                </span>
                <span>
                  <img className="h-8 w-8 " src="./src/assets/arrow-left.svg" alt="arrow"></img>
                </span>
              </button>
            </div>

            <div className="relative">
              <img className="absolute mt-8 -translate-y-6 object-none object-left-bottom group-hover:-rotate-[22.5deg] group-hover:translate-y-6 duration-500 group-hover:brightness-75 group-hover:duration-500 brightness-100" src="../src/assets/transparent-thrindle.svg" alt="Thrift By Thrindle Icon"></img>
            </div>
          </div>

        </div>
        <div className="w-full h-full relative">
          <div className="absolute inset-0 translate-x-20 group-hover:-translate-x-7 duration-500">
            <img className="h-full aspect-auto scale-115 group-hover:scale-95 duration-500" src="../src/assets/dashboard.svg"></img>
          </div>
        </div>
      </div>


      <div className="container mx-auto my-3 grid gap-6 grid-cols-2 justify-evenly h-[42rem]">
        {/* Mope Section */}
        <div className=" border-[0.01rem] rounded-lg bg-slate-50 border-gray-300 items-center group">
          <div className="grid grid-rows-auto h-full w-full border-[0.01rem] rounded-lg border-gray-300 group-hover:bg-thrindle-yellow">
            <div className="aspect-auto m-0">
              <img className=" aspect-auto mx-32 mt-8 group-hover:-translate-y-4 duration-500" src="../src/assets/mope.svg"></img>
            </div>

            <div className="group self-center relative">
              <img className="mx-16 my-0 opacity-100 group-hover:opacity-0 duration-500" src="../src/assets/mope-logo-1.svg" alt="mope logo"></img>
              <img className="absolute top-0 left-0 mx-16 my-0 opacity-0 group-hover:opacity-100 duration-500" src="../src/assets/mope-logo-2.svg" alt="mope logo"></img>
            </div>
            <div className="self-start">
              <p className="mx-16 my-0 h-6 group-hover:text-white">
                <strong>Send Mope</strong> is our interactive shopping assistant <br></br>
                designed to bring all your shopping needs to life.
              </p>
            </div>

            <div className="flex space-x-4 h-12 w-40 mx-16 self-start">
              <button className="flex items-center justify-center w-48 h-12 text-base text-thrindle-blue rounded-lg bg-white duration-100 border-[0.1rem] border-thrindle-blue font-normal group-hover:border-none">
                <span className="mr-2 group-hover:font-bold duration-500">
                  Visit Mope
                </span>
                <span>
                  <img className="h-8 w-8 " src="./src/assets/arrow-left-1.svg" alt="arrow"></img>
                </span>
              </button>
            </div>

          </div>
        </div>


        {/* Thrift by Thrindle Section */}
        <div className="relative grid grid-rows-auto border-[0.01rem] border-gray-300 rounded-lg bg-thrindle-pastel-yellow items-center group">
          <div className="h-full w-full overflow-hidden object-none object-right">
            <img className="scale-125 mx-32 mt-16 group-hover:scale-150 group-hover:-translate-y-8 duration-500" src="../src/assets/thrift-icon.svg"></img>
          </div>

          <div className="self-center">
            <img className="mx-16 my-0" src="../src/assets/thrindle-thrift.svg"></img>
          </div>
          <div className="self-start">
            <p className="mx-16 my-0 h-6 font-semibold">
              Providing the best thrift items for everyday use. Simply request an<br></br>
              item and leave the rest to us.
            </p>
          </div>

          <div className="flex space-x-4 h-12 w-52 mx-16 self-start">
            <button className="group flex items-center justify-center w-52 h-12 text-base text-thrindle-blue rounded-lg bg-thrindle-pastel-yellow duration-100 border-[0.1rem] border-thrindle-blue font-normal group-hover:bg-thrindle-blue group-hover:text-white group-hover:border-none">
              <span className="mr-2 group-hover:font-bold duration-500">
                Visit Website
              </span>
              <div className="relative h-8 w-8">
                <img className="absolute h-8 w-8 opacity-100 group-hover:opacity-0 duration-500" src="../src/assets/arrow-left-1.svg" alt="arrow"></img>
                <img className="absolute h-8 w-8 opacity-0 group-hover:opacity-100 duration-500" src="../src/assets/arrow-left-2.svg" alt="arrow"></img>
              </div>
            </button>
          </div>

        </div>

      </div>
    </>

  );

}

export default App;
