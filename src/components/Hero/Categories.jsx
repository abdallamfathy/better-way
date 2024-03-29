import { categories } from "../../assets/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

const Categories = ({ show, updateState }) => {
  // function to show category details
  const toggle = () => {
    // updating state of CatContext
    updateState(!show);
  };
  // font awesome function
  library.add(fas);

  return (
    <div className="flex flex-col items-start text-white m-4 w-full">
      <div className="w-full h-full">
        <ul
          className="flex flex-col w-full h-full"
          onMouseEnter={() => toggle()}
          onMouseLeave={() => toggle()}>
          {categories.map((category) => {
            return (
              <div className="flex items-center gap-4 cursor-pointer  hover:text-btn w-full  h-12 ">
                <li className="font-medium text-xl">
                  <FontAwesomeIcon icon={category.icon} key={category.icon} />
                </li>
                <li className="text-lg font-medium" key={category.id}>
                  {category.name}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
