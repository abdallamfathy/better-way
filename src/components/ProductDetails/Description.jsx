import React from 'react'
import { useLangContext } from '../../utils/LangContext';

const Description = ({description}) => {
  const { language } = useLangContext();
  const lang = language === true ? 'ltr' : 'rtl';
  return (
    <div dir={lang} className="Description">
                <div className="SubTitle w-full my-4"><h2 className="md:text-3xl text-xl font-semibold">
                  {
                    language ? 'Description : ' : 'الوصف : '
                  }
                  </h2></div>
                <div className="leading-10 md:p-5 my-2">
                  <p>{description}</p>
                </div>
              </div>
  )
}

export default Description