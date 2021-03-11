import React from "react";
import style from "./Eventlog.module.css";
import style2 from "./Holdings.module.css";

const List = ({ title, columns, rows, subTitle = null, span = null }) => {
  // Render subTitle
  const renderSubTitle = () => {
    if (!subTitle) return;

    return (
      <div className={style2.sub_title}>
        {subTitle} <span>{span}</span>
      </div>
    );
  };

  //   Render columns
  const getColumns = () => {
    return columns.map((el, idx) => {
      return <div key={idx}>{el}</div>;
    });
  };

  //   Render rows with all data (in future from API)
  const getRow = () => {
    return rows.map((row, idx) => {
      return (
        <div key={idx} className={style.table_row}>
          {row.map((el, idx) => {
            return <div key={idx}>{el}</div>;
          })}
        </div>
      );
    });
  };

  return (
    <div className={style.event}>
      <div className={style.title}>{title}</div>
      {renderSubTitle()}
      <div className={style.table_titles}>{getColumns()}</div>
      {getRow()}
    </div>
  );
};

export default List;
