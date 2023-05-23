import React from 'react'

const Description = ({description}) => {
  return (
    <div className="Description">
                <div className="SubTitle w-full my-4"><h2 className="md:text-5xl text-2xl font-semibold">Description :</h2></div>
                <div className="leading-10 md:p-5 my-2">
                  <p>{description}</p>
                </div>
              </div>
  )
}

export default Description