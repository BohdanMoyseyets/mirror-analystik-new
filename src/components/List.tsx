import { FC, useState } from "react";
import style from "./Eventlog.module.scss";
import style2 from "./Holdings.module.scss";
import { Pagination } from "./Pagination";

interface Props {
	title: string,
	columns: string[],
	rows: string[][],
	subTitle: string | null,
	span: string | null,
}

const List: FC<Props> = ({ title, columns, rows, subTitle = null, span = null }) => {
	const [eventsPages, setEventsPages] = useState<[][]>([[]])
	const [currentPage, setCurrentPage] = useState<number>(1)

	const maxRows = 10

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
	const getColumns = () => columns.map((el, idx) => <div key={idx}>{el}</div>)


	//   Render rows with all data (in future from API)
	const getRow = (rowsToDisplay: string[][]) => {
		return Array.from(rowsToDisplay).slice(0, maxRows).map((row: string[], idx: number) => {
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
			{
				rows.length > 10 ?
					<>
						{getRow(eventsPages[currentPage - 1])}
						<Pagination
							rows={rows}
							rowsPerPage={maxRows}
							setDividedArray={setEventsPages}
							setCurrentPage={setCurrentPage}
						/>
					</>
					: getRow(rows)
			}
		</div>
	);
};

export default List;
