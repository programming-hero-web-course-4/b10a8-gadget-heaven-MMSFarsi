import { useLoaderData, useParams } from 'react-router-dom';

const GadgetDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id === parseInt(id)); 

    return (
        <div>
            <h2>{gadget.product_title}</h2>
            <p>Price: ${gadget.price.toFixed(2)}</p>
            <p>Description: {gadget.description}</p>
        </div>
    );
};

export default GadgetDetails;
