import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './hospital.css';
const Styles = styled.div`
	background: #7d26cd;
`;

function Beds() {
	const [dataList, setData] = useState([]);
	const getdata = async () => {
		const url = 'https://api.rootnet.in/covid19-in/hospitals/beds';
		try {
			const response = await axios.get(url);
			console.log(response);
			await setData(response.data.data.regional);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getdata();
	}, []);
	return (
		<Styles>
			<div className='row'>
				{dataList.map((value) => (
					<div className='card col-3 text-center shadow mt-3'>
						<div className='card-body '>
							<h4 className='card-title '>{value.state}</h4>
							<hr style={{ color: '#fffff' }}></hr>
							<div className='card-main row'>
								<div className='col-12 text-info'>
									<p>Rural Hospitals: {value.ruralHospitals}</p>
								</div>
								<div className='col-12 text-info'>
									<p>Rural Beds: {value.ruralBeds}</p>
								</div>
								<div className='col-12  text-warning'>
									<p>Urban Hospitals: {value.urbanHospitals}</p>
								</div>
								<div className='col-12 text-warning'>
									<p>Urban Beds: {value.urbanBeds}</p>
								</div>
								<div className='col-12 text-success'>
									<p>Total Hospitals: {value.totalHospitals}</p>
								</div>
								<div className='col-12 text-success'>
									<p>Total Beds: {value.totalBeds}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</Styles>
	);
}

export default Beds;
