/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
export default function GivenDonation({ donation }) {
    const {id, image, title, category, color, backgroundColor, price } = donation;
    return (
      <div
        style={{ backgroundColor: backgroundColor }}
        className="rounded-lg transition hover:scale-105 flex flex-row" 
      >
        <div className="h-full w-1/2">
          <img
            src={image}
            alt={title}
            className="rounded-md w-full h-full object-cover"
          />
        </div>
        <div className="px-4 py-5 w-1/2">
          <p
            style={{ color, backgroundColor: backgroundColor }}
            className="mb-4 w-1/3 p-2 text-center rounded-lg"
          >
            {category}
          </p>
          <h2 style={{ color }} className="text-xl font-bold">
            {title}
          </h2>
          <h3 style={{ color: color }} className="font-semibold">
            ${price}
          </h3>
          <Link to={`/details/${id}`}>
          <button
            style={{ backgroundColor: donation.color }}
            className="btn text-white mt-5"
          >
            View Details
          </button>
          </Link>
        </div>
      </div>
    );
  }
  