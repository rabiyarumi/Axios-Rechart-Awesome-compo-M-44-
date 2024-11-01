import PropTypes from 'prop-types'; // ES6
import { FaCheckCircle } from "react-icons/fa";


const PriceOption = ({option}) => {

    const {optionName, price, features} = option
    return (
        <div className='shadow-2xl space-y-3 p-4 flex flex-col'>
            <div className='font-bold'>
                <span className='text-5xl '>{price}</span>
                <span className='text-lg'>/mon</span>
            </div>
            <h2 className='text-3xl font-bold'>{optionName}</h2>
            <p className='font-bold text-2xl'>Features:</p>
           <div className='flex-grow'>
           {
                features.map((feature, idx) => 
                <div key={idx} className='px-3  flex items-center gap-2 my-2'>
                    < FaCheckCircle className='h-6 text-green-600'> </FaCheckCircle>
                    <p className='opacity-75'>{feature}</p>
                </div>)
            }
           </div>
            <button className='btn mt-12 w-full'>Buy Now</button>
            
        </div>
    );
};


PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;