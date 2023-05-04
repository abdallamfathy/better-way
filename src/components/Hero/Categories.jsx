import { categories } from "../../assets/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import API_BASE_URL from '../../../config';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = ({ show, updateState }) => {
  // function to show category details
  const toggle = () => {
    // updating state of CatContext
    updateState(!show);
  };
  // font awesome function
  library.add(fas);



// ...
// const datas = [];
// fetch(`${API_BASE_URL}api/v1/shops`)
//   .then(response => response.json())
//   .then(data => datas.push(data))
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_BASE_URL}api/v1/categories`);
      const data = await response.json();
      setMyData(data.data);
    };

    fetchData();
  }, []);
  myData?.map((data) => {
    console.log(data.title);
  });
  // console.log(myData);
  return (
    <div className="flex flex-col items-start text-white m-4 w-full">
      <div className="w-full h-full">
        <ul
          className="flex flex-col w-full h-full"
          onMouseEnter={() => toggle()}
          onMouseLeave={() => toggle()}>
          {myData?.map((category) => {
            return (
                <Link key={category.id} to={`/category/${category.id}`}>
              <div  className="flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 ">
                <li className="font-medium text-xl">
                  {/* <FontAwesomeIcon icon={category.icon} key={category.icon} /> */}
                  <img src={category.logo} alt="logo" className="w-10 h-10" />
                </li>
                <li className="text-lg font-medium">
                  {category.title}
                </li>
              </div>
                </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
