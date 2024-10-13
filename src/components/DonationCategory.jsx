import { useEffect, useState } from "react";
import Donations from "./Donations";


export default function DonationCategory() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  console.log(donations);
  return (
    <div className="container mx-auto mt-[310px] mb-[158px]">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
       {
        donations.map(donation=><Donations key={donation.id} donation={donation}/>)
       }
      </div>
    </div>
  );
}
