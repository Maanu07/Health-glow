import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Offers() {
  const [offers, setOffers] = useState(null);

  const getOffers = async () => {
    const result = await axios.get("http://localhost:3000/Offers");
    // console.log(result.data);
    setOffers(result.data);
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div className='d-flex justify-content-center'>
      {offers && offers.map((offer) => <Card offer={offer} />)}
    </div>
  );
}
