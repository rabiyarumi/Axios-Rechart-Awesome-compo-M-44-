import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "optionName": "Basic Membership",
          "price": 30,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 free personal training session per month"
          ]
        },
        {
          "id": 2,
          "optionName": "Standard Membership",
          "price": 50,
          "features": [
            "Access to gym equipment",
            "Locker room and shower access",
            "2 free personal training sessions per month",
            "Access to group fitness classes"
          ]
        },
        {
          "id": 3,
          "optionName": "Premium Membership",
          "price": 80,
          "features": [
            "Unlimited gym access",
            "Locker room and shower access",
            "4 free personal training sessions per month",
            "Access to group fitness and yoga classes",
            "Access to sauna and steam rooms"
          ]
        },
        {
          "id": 4,
          "optionName": "VIP Membership",
          "price": 120,
          "features": [
            "24/7 gym access",
            "Locker room, shower, and private changing room access",
            "Unlimited personal training sessions",
            "Access to all group fitness, yoga, and pilates classes",
            "Access to VIP lounge and spa facilities",
            "Monthly health and fitness consultation"
          ]
        }
      ]
      

    return (
        <div className="container mx-auto my-16 ">
            <h1 className="text-4xl font-bold text-center  mb-8">Best Membership Options in the Town</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}> </PriceOption>)
            }
           </div>
            
            
        </div>
    );
};

export default PriceOptions;