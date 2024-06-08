function Lead() {
  return (
    <section>
      <div className=" p-4 px-40 mx-auto bg-custom-premium  shadow-md items-center">
        <form className="flex lg:flex-row flex-col justify-between items-center">
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-center mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-2 border border-gray-300 rounded-full text-center"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="address" className=" text-center  mb-2 font-semibold">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              className="p-2 border border-gray-300 rounded-full text-center"
              placeholder="Enter your address"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="phone" className=" text-center mb-2 font-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="p-2 border border-gray-300 rounded-full text-center"
              placeholder="Enter your phone number"
            />
          </div>
        <button
          type="submit"
          className="w-auto h-full bg-custom-db text-custom-premium py-2 px-8 lg:text-2xl text-lg rounded-full"
        >
          Submit
        </button>
        </form>
      </div>
    </section>
  );
}

export default Lead;
