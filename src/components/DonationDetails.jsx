import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveStoredDonation } from "../utils/saveDonation";
export default function DonationDetails() {
  const donations = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const donation = donations.find((donation) => donation.id === intId);

  const handleDonation = () => {
    saveStoredDonation(intId);
    toast("Donation successful!");
  };
  return (
    <>
      <div className="relative container mx-auto">
        <div className="flex flex-col justify-center items-center mt-20">
          <img
            className="w-[1320px]"
            src={donation.image}
            alt={donation.title}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 h-[130px] flex items-center justify-start">
            <button
              onClick={handleDonation}
              style={{ backgroundColor: donation.color }}
              className="btn text-white ml-4"
            >
              Donate: ${donation.price}
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="mt-14 text-4xl font-bold mb-6">{donation.title}</h2>
        <p className="text-[#0B0B0B80]">{donation.description}</p>
        <h3 className="mt-6 text-[20px] font-bold mb-4">
          Here are some benefit of a {donation.title}
        </h3>
        <ul className="list-disc text-[#0B0B0B80] ml-5 mb-[157px]">
          {donation.details.map((detail, index) => (
            <li key={index}>{detail.point}</li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
}
