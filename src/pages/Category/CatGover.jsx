import React, { useEffect, useState } from 'react'
import API_BASE_URL from '../../../config';
import { useLangContext } from '../../utils/LangContext';

const CatGover = ({ setForm }) => {
  const [myData, setMyData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_BASE_URL}api/v1/governorates`);
      const data = await response.json();
      setMyData(data.data);
    };

    fetchData();
  }, []);
  //   const [selectedItem, setSelectedItem] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const { language } = useLangContext();
  return (
    <>
      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="governorate_id"
          id={0}
          value={''}
          onChange={handleChange}
        />
        <div className="flex justify-between 2xl:text-2xl xl:text-xl lg:text-lg">
          {
            language ? "All" : "الكل"
          }
        </div>
      </div>
      {
        myData?.map((item) => {
          return (
            <div className="flex gap-4 items-center" key={item?.id}>
              <input
                type="radio"
                name="governorate_id"
                id={item?.id}
                value={item?.id}
                onChange={handleChange}
              />
              <div className="flex justify-between 2xl:text-2xl xl:text-xl lg:text-lg">
                {
                  language ? item?.title : item?.title_ar
                }
              </div>
            </div>
          );
        }
        )}
    </>
  )
}

export default CatGover