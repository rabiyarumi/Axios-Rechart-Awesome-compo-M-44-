import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phonesData = data.data.data;
        const phonesWithFakeData = phonesData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonesWithFakeData);
        console.log(phonesWithFakeData);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold"> Broken Phones: {phones.length} </h2>


        <BarChart width={750} height={400} data={phones}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
    </div>
  );
};

export default Phones;
