import React from "react";

const SectionTitle = ({ title, desc }) => {
  return (
    <div className='row'>
      <div className='col-lg-5 m-auto text-center'>
        <div className='section-title'>
          <h2 className='h3'>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
