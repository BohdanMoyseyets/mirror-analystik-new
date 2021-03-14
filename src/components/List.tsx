import React, {FC} from "react";
import style from "./Eventlog.module.scss";
import style2 from "./Holdings.module.scss";

interface Props {
  title: string,
  columns: string[],
  rows: string[][],
  subTitle: string | null,
  span: string | null,
}

const List: FC<Props> = ({ title, columns, rows, subTitle = null, span = null }) => {
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