import React from 'react'
import { RiStarSFill } from "react-icons/ri";

const Rate = ({ setForm  , form}) => {

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: parseInt(value, 10),
        }));
    };

    return (
        <div className="m-5 flex flex-col gap-2">
            <>
                <div className="flex gap-4 items-center">
                    <input type="radio"
                        name="rate"
                        // id="5"
                        value={4}
                        onChange={handleChange}
                    />
                    <div className="flex justify-between text-btn 2xl:text-2xl xl:text-xl lg:text-lg">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill className="text-txt" />
                    </div>
                    <p>4 & above</p>
                </div>
            </>


            <>
                <div className="flex gap-4 items-center">
                    <input type="radio"
                        name="rate"
                        // id="5"
                        value={3}
                        onChange={handleChange}
                    />
                    <div className="flex justify-between text-btn 2xl:text-2xl xl:text-xl lg:text-lg">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill className="text-txt" />
                        <RiStarSFill className="text-txt" />
                    </div>
                    <p>3 & above</p>
                </div>
            </>
            <>
                <div className="flex gap-4 items-center">
                    <input type="radio"
                        name="rate"
                        // id="5"
                        value={2}
                        onChange={handleChange}
                    />
                    <div className="flex justify-between text-btn 2xl:text-2xl xl:text-xl lg:text-lg">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill className="text-txt" />
                        <RiStarSFill className="text-txt" />
                        <RiStarSFill className="text-txt" />
                    </div>
                    <p>2 & above</p>
                </div>
            </>
            <>
                <div className="flex gap-4 items-center">
                    <input type="radio"
                        name="rate"
                        id="5"
                        value={1}
                        onChange={handleChange}
                    />
                    <div className="flex justify-between text-btn 2xl:text-2xl xl:text-xl lg:text-lg">
                        <RiStarSFill />
                        <RiStarSFill className="text-txt" />
                        <RiStarSFill className="text-txt" />
                        <RiStarSFill className="text-txt" />
                        <RiStarSFill className="text-txt" />
                    </div>
                    <p>1 & above</p>
                </div>
            </>
        </div>
    )
}

export default Rate