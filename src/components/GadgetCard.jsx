import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const GadgetCard = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [gadget, setGadget] = useState([]);

  useEffect(() => {
    if (category && category !== "All Products") {
      const categoryWiseData = data.filter(gadget => gadget.category === category);
      setGadget(categoryWiseData);
    } else {
      setGadget(data);
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {gadget.map(gadget => (
        <Card key={gadget.product_id} gadget={gadget} />
      ))}
    </div>
  );
};

export default GadgetCard;
