export default function Banner() {
  return (
    <div className="container mx-auto text-center mt-28">
      <h1 className="text-5xl font-bold mb-10">
        I Grow By Helping People In Need
      </h1>
      <div>
        <input
          type="text"
          placeholder="Search here"
          className="input border-[#DEDEDE] rounded-none  input-info w-full max-w-xs"
        />
        <button className="btn btn-error rounded-none text-white px-7 py-4">
          Search
        </button>
      </div>
    </div>
  );
}
