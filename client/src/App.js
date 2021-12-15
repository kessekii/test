import axios from "axios"
import React, { useState, useEffect } from "react"
import "./App.css"
import DataTable from "./components/tableComponent"

function App() {
	const [ data, setData ] = useState("")

	useEffect(() => {
		axios.get("http://localhost:4000/home").then(function(response) {
		 	setData(response.data)
		})
	}, [])

	return (
		<div className="App">
			<DataTable data={data}/>
		</div>
	)
}

export default App
