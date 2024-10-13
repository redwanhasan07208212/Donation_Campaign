export const getStoredDonation = () => {
  const getDonation = localStorage.getItem("donation");
  if (getDonation) {
    return JSON.parse(getDonation);
  }
  return [];
};
export const saveStoredDonation = (saveId) => {
  const saveDonation = getStoredDonation();
  const exist = saveDonation.find((id) => id === saveId);
  if (!exist) {
    saveDonation.push(saveId);
    localStorage.setItem("donation", JSON.stringify(saveDonation));
  }
};
