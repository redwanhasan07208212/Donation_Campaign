import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utils/saveDonation";
import GivenDonation from "./GivenDonation";

export default function Donation() {
  const donations = useLoaderData();
  const [displayDonation, setDisplayDonation] = useState([]);
  const [donationLength, setDonationLength] = useState([4]);

  useEffect(() => {
    const getDonation = getStoredDonation();
    if (donations.length > 0) {
      const giveDonation = donations.filter((donation) =>
        getDonation.includes(donation.id)
      );
      setDisplayDonation(giveDonation);
    }
  }, [donations]);
  return (
    <div className="container mx-auto mt-20 mb-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {displayDonation.slice(0, donationLength).map((donation) => (
          <GivenDonation key={donation.id} donation={donation} />
        ))}
      </div>
      <div
        className={donationLength === displayDonation.length ? "hidden" : ""}
      >
        <div className="flex justify-center items-center mt-10">
          <button
            onClick={() => setDonationLength(displayDonation.length)}
            className="btn btn-neutral"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
}
