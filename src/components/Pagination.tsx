
import React, { FC, useEffect, useState } from "react";
import style from "./Eventlog.module.scss";


interface PagingProps {
	rows: string[][],
	rowsPerPage: number,
	setDividedArray: Function,
	setCurrentPage: Function
}


export const Pagination: FC<PagingProps> = ({ rows, rowsPerPage, setDividedArray, setCurrentPage }) => {

	const [chosenPage, setChosenPage] = useState<number>()

	//get number of pages
	const pagesNumber = Math.ceil(rows.length / rowsPerPage) || 1

	//fill up pagination buttons array 
	const pagesNumberArray = []
	for (let i = 0; i < pagesNumber; i++) {
		pagesNumberArray.push({ id: i + 1 })
	}

	//divide array of events on equal parts
	const pageArray = (array: string[][], size: number) => {
		let subarray = [];
		for (let i = 0; i < Math.ceil(array.length / size); i++) {
			subarray[i] = array.slice((i * size), (i * size) + size);
		}
		return subarray
	}

	//send paginated array to parent component 
	useEffect(() => {
		setDividedArray(pageArray(rows, rowsPerPage))
	}, [rows, rowsPerPage, setDividedArray])

	return (
		<div className={style.paging_wrapper}>
			{
				pagesNumberArray.map(button => <div
					key={button.id}
					className={button.id === chosenPage ? `${style.paging_button} ${style.active}` : style.paging_button}
					onClick={() => {
						setChosenPage(button.id);
						setCurrentPage(button.id);
					}}
				>{button.id}</div>)
			}
		</div >
	);
};
