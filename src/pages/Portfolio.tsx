import React from "react";
import Chart from "../components/Chart";
// import Eventlog from "../components/Eventlog";
import Graph from "../components/Graph";
import Header from "../components/Header";
// import Holdings from "../components/Holdings";
import Performance from "../components/Performance";
import List from "../components/List";

// Data for List will be fetched from api in future

// Holdings data
const holdingColumns = [
	"Ticker",
	"Underlying Name",
	"Price",
	"Balance",
	"Value",
	"Port. Ratio",
];
const holdingRows = [
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mYANDEX", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mYANDEX", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mYANDEX", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mYANDEX", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mYANDEX", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mYANDEX", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mYANDEX", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mYANDEX", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mYANDEX", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mGOOGLE", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
	["mYANDEX", "Google", "0.957 UST | 8.73%", "0.9999", "500 UST", "33%"],
];

// Events data
const eventColumns = ["Type", "Change", "Time"];
const eventRows = [
	["Withdraw rewards", "0.241852 MIR", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Provided Liquidity", "0.3 MIR and 1.675 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
	["Bought", "0.178894 MIR with 1 UST", "2020.12.23 07:37:13 (CST)"],
];

const Portfolio = () => {
	return (
		<>
			<Header />
			<Performance />
			<Chart />
			{/* <Holdings /> */}
			<List
				title="Holdings"
				columns={holdingColumns}
				rows={holdingRows}
				subTitle="Total holding value"
				span="1500 UST"
			/>
			<Graph />
			{/* <Eventlog /> */}
			<List title="Event Log" columns={eventColumns} rows={eventRows} subTitle={null} span={null} />
		</>
	);
};

export default Portfolio;
