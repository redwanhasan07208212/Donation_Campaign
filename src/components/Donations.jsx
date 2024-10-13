import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Donations({ donation }) {
  const { id, image, title, category, color, backgroundColor } = donation;
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className={`rounded-lg transition hover:scale-105`}
    >
      <Link to={`/details/${id}`}>
        <img src={image} alt={title} />
        <div className="px-4 py-5">
          <p
            style={{ color, backgroundColor: backgroundColor }}
            className="mb-4 w-1/3 p-2 text-center rounded-lg"
          >
            {category}
          </p>
          <h2 style={{ color }} className={`text-xl font-bold`}>
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
}
