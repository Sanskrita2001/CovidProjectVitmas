import React, { Fragment, useEffect, useState } from 'react';
import States from './Components/States';
import Andhra from './Components/states/Andhra/Andhra';

import Axios from 'axios';
import { Route } from 'react-router-dom';
import Maharashtra from './Components/states/Maharashtra/maharashtra';
import Arunachal from './Components/states/Arunachal/Arunachal';
import Andaman from './Components/states/Andaman/Andaman';
import Assam from './Components/states/Assam/Assam';
import Bengal from './Components/states/Bengal/WestBengal';
import Bihar from './Components/states/Bihar/Bihar';
import Chandigarh from './Components/states/Chandigarh/Chandigarh';
import Chhattisgarh from './Components/states/chhattisgarh/Chhattisgarh';
import Delhi from './Components/states/Delhi/Delhi';
import Dadra from './Components/states/dadra/Dadra';
import Goa from './Components/states/Goa/Goa';
import Gujarat from './Components/states/gujarat/Gujarat';
import Himachal from './Components/states/Himachal/Himachal';
import Haryana from './Components/states/Haryana/Haryana';
import Jharkhand from './Components/states/jharkhand/Jharkhand';
import JammuKashmir from './Components/states/jJammuKashmir/JammuKashmir';
import Karnataka from './Components/states/karnataka/Karnataka';
import Kerala from './Components/states/kerala/Kerala';
import Ladakh from './Components/states/ladakh/Ladakh';
import Lakshwadeep from './Components/states/lakshwadeep/Lakshwadeep';
import Meghalaya from './Components/states/meghalaya/Meghalaya';
import Manipur from './Components/states/manipur/Manipur';
import MadhyaPradesh from './Components/states/madhyapradesh/MadhyaPradesh';
import Mizoram from './Components/states/mizoram/Mizoram';
import Nagaland from './Components/states/nagaland/Nagaland';
import Odisha from './Components/states/odisha/Odisha';
import Punjab from './Components/states/punjab/Punjab';
import Puducherry from './Components/states/puducherry/Puducherry';
import Rajasthan from './Components/states/rajasthan/Rajasthan';
import Sikkim from './Components/states/sikkim/Sikkim';
import Telengana from './Components/states/telengana/Telengana';
import TamilNadu from './Components/states/tamilnadu/TamilNadu';
import Tripura from './Components/states/tripura/Tripura';
import UttarPradesh from './Components/states/uttarpradesh/UttarPradesh';
import Uttarakhand from './Components/states/uttarakhand/Uttarakhand';

function Main() {
	const [details, setDetails] = useState([]);
	const [westbengal, setWestbengal] = useState([]);
	const [andaman, setAndaman] = useState([]);
	const [andhra, setAndhra] = useState([]);
	const [maharashtra, setMaharashtra] = useState([]);
	const [arunachal, setArunachal] = useState([]);
	const [assam, setAssam] = useState([]);
	const [bihar, setBihar] = useState([]);
	const [chandigarh, setChandigarh] = useState([]);
	const [chhattisgarh, setChhattisgarh] = useState([]);
	const [delhi, setDelhi] = useState([]);
	const [dadra, setDadra] = useState([]);
	const [goa, setGoa] = useState([]);
	const [gujarat, setGujarat] = useState([]);
	const [himachal, setHimachal] = useState([]);
	const [haryana, setHaryana] = useState([]);
	const [jharkhand, setJharkhand] = useState([]);
	const [jk, setJk] = useState([]);
	const [karnataka, setKarnataka] = useState([]);
	const [kerala, setKerala] = useState([]);
	const [ladakh, setLadakh] = useState([]);
	const [lakshwadeep, setLakshwadeep] = useState([]);
	const [meghalaya, setMeghalaya] = useState([]);
	const [manipur, setManipur] = useState([]);
	const [madhyapradesh, setMadhyapradesh] = useState([]);
	const [mizoram, setMizoram] = useState([]);
	const [nagaland, setNagaland] = useState([]);
	const [odisha, setOdisha] = useState([]);
	const [punjab, setPunjab] = useState([]);
	const [puducherry, setPuducherry] = useState([]);
	const [rajasthan, setRajasthan] = useState([]);
	const [sikkim, setSikkim] = useState([]);
	const [telengana, setTelengana] = useState([]);
	const [tamilnadu, setTamilnadu] = useState([]);
	const [tripura, setTripura] = useState([]);
	const [uttarpradesh, setUttarpradesh] = useState([]);
	const [uttarakhand, setUttarakhand] = useState([]);

	const fetchStateData = async () => {
		const { data } = await Axios.get(
			'https://api.covidindiatracker.com/state_data.json'
		);
		setDetails(data);
	};
	const fetchDistrictData = async () => {
		const { data } = await Axios.get(
			'https://api.covid19india.org/v2/state_district_wise.json'
		);
		setWestbengal(data[36].districtData);
		setAndaman(data[1].districtData);
		setAndhra(data[2].districtData);
		setArunachal(data[3].districtData);
		setAssam(data[4].districtData);
		setBihar(data[5].districtData);
		setChandigarh(data[6].districtData);
		setChhattisgarh(data[7].districtData);
		setDelhi(data[8].districtData);
		setDadra(data[9].districtData);
		setGoa(data[10].districtData);
		setGujarat(data[11].districtData);
		setHimachal(data[12].districtData);
		setHaryana(data[13].districtData);
		setJharkhand(data[14].districtData);
		setJk(data[15].districtData);
		setKarnataka(data[16].districtData);
		setKerala(data[17].districtData);
		setLadakh(data[18].districtData);
		setLakshwadeep(data[19].districtData);
		setMaharashtra(data[20].districtData);
		setMeghalaya(data[21].districtData);
		setManipur(data[22].districtData);
		setMadhyapradesh(data[23].districtData);
		setMizoram(data[24].districtData);
		setNagaland(data[25].districtData);
		setOdisha(data[26].districtData);
		setPunjab(data[27].districtData);
		setPuducherry(data[28].districtData);
		setRajasthan(data[29].districtData);
		setSikkim(data[30].districtData);
		setTelengana(data[31].districtData);
		setTamilnadu(data[32].districtData);
		setTripura(data[33].districtData);
		setUttarpradesh(data[34].districtData);
		setUttarakhand(data[35].districtData);
	};

	useEffect(() => {
		fetchStateData();
		fetchDistrictData();
	}, []);

	return (
		<div>
			<Route exact path='/states'>
				<States details={details} />
				{/* <SearchBar/> */}
			</Route>
			<Route
				exact
				path='/states/IN-MH'
				render={(props) => (
					<Fragment>
						<Maharashtra maharashtra={maharashtra} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-AP'
				render={(props) => (
					<Fragment>
						<Andhra andhra={andhra} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-AP'
				render={(props) => (
					<Fragment>
						<Andhra andhra={andhra} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-AR'
				render={(props) => (
					<Fragment>
						<Arunachal arunachal={arunachal} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-AN'
				render={(props) => (
					<Fragment>
						<Andaman andaman={andaman} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-AS'
				render={(props) => (
					<Fragment>
						<Assam assam={assam} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-WB'
				render={(props) => (
					<Fragment>
						<Bengal westbengal={westbengal} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-BR'
				render={(props) => (
					<Fragment>
						<Bihar bihar={bihar} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-CH'
				render={(props) => (
					<Fragment>
						<Chandigarh chandigarh={chandigarh} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-CT'
				render={(props) => (
					<Fragment>
						<Chhattisgarh chhattisgarh={chhattisgarh} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-DL'
				render={(props) => (
					<Fragment>
						<Delhi delhi={delhi} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-DN'
				render={(props) => (
					<Fragment>
						<Dadra dadra={dadra} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-GA'
				render={(props) => (
					<Fragment>
						<Goa goa={goa} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-GJ'
				render={(props) => (
					<Fragment>
						<Gujarat gujarat={gujarat} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-HP'
				render={(props) => (
					<Fragment>
						<Himachal himachal={himachal} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-HR'
				render={(props) => (
					<Fragment>
						<Haryana haryana={haryana} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-JH'
				render={(props) => (
					<Fragment>
						<Jharkhand jharkhand={jharkhand} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-JK'
				render={(props) => (
					<Fragment>
						<JammuKashmir jk={jk} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-KA'
				render={(props) => (
					<Fragment>
						<Karnataka karnataka={karnataka} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-KL'
				render={(props) => (
					<Fragment>
						<Kerala kerala={kerala} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-LK'
				render={(props) => (
					<Fragment>
						<Ladakh ladakh={ladakh} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-LD'
				render={(props) => (
					<Fragment>
						<Lakshwadeep lakshwadeep={lakshwadeep} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-ML'
				render={(props) => (
					<Fragment>
						<Meghalaya meghalaya={meghalaya} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-MN'
				render={(props) => (
					<Fragment>
						<Manipur manipur={manipur} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-MP'
				render={(props) => (
					<Fragment>
						<MadhyaPradesh madhyapradesh={madhyapradesh} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-MZ'
				render={(props) => (
					<Fragment>
						<Mizoram mizoram={mizoram} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-NL'
				render={(props) => (
					<Fragment>
						<Nagaland nagaland={nagaland} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-OR'
				render={(props) => (
					<Fragment>
						<Odisha odisha={odisha} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-PB'
				render={(props) => (
					<Fragment>
						<Punjab punjab={punjab} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-PY'
				render={(props) => (
					<Fragment>
						<Puducherry puducherry={puducherry} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-RJ'
				render={(props) => (
					<Fragment>
						<Rajasthan rajasthan={rajasthan} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-SK'
				render={(props) => (
					<Fragment>
						<Sikkim sikkim={sikkim} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-TG'
				render={(props) => (
					<Fragment>
						<Telengana telengana={telengana} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-TN'
				render={(props) => (
					<Fragment>
						<TamilNadu tamilnadu={tamilnadu} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-TR'
				render={(props) => (
					<Fragment>
						<Tripura tripura={tripura} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-UP'
				render={(props) => (
					<Fragment>
						<UttarPradesh uttarpradesh={uttarpradesh} />
					</Fragment>
				)}
			/>
			<Route
				exact
				path='/states/IN-UT'
				render={(props) => (
					<Fragment>
						<Uttarakhand uttarakhand={uttarakhand} />
					</Fragment>
				)}
			/>
		</div>
	);
}

export default Main;
