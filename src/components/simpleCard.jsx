import React from "react";

function SimpleCard({ dataObject }) {
  return (
    <div className="job-card">
      <div className="job-card-inside-div">
        <a href={dataObject.link} target="_blank">
          <img
            href={dataObject.link}
            className="icon-img-medium"
            src={dataObject.logo}
            alt={dataObject.name}
          />
        </a>
        <div>
          <h4>{dataObject.role}</h4>
          <a href={dataObject.link} className="job-card-dataObjectName">
            {dataObject.name}
          </a>
          <div className="date">
            {dataObject.dataInicio + " - " + dataObject.dataFim}
          </div>
          <div className="margin-extra-small-top description">
            {dataObject.roleDescription}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;
