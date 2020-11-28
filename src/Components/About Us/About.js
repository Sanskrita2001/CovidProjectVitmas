import React from 'react';
import './About.css';
import Teams from './Teams';
function About() {
	return (
		<div>
			<div className='container text-white'>
				<div className='row'>
					<div className='col-6'>
						<h1 className='p-2'>ABOUT US</h1>
						<hr></hr>
						<p className='About-para'>
							Our Web Application displays the details of each State affected by
							Corona.the number of people affected, the number of people in
							Quarantine, the number of people deceased, the number of hospital
							beds remaining(new feature) is displayed. Our model would also
							enable to user to navigate all the COVID hospitals in his
							locality. It can also be used for travelling purposes. It can
							notify a user whether it would be safe to travel in a particular
							time in future.
						</p>
					</div>
					<div className='col-6'>
						<h4 className='mt-5 mb-4'>OUR ADMIN DASHBOARD :</h4>
						<p>
							This admin would kind off act as a Government official and based
							on the prediction made by our ML model, it can predict things
							like-
							<ol className='mt-2'>
								<li>Whether to impose lockdown in a particular area or not.</li>
								<li>
									Whether to allow influx of people from other states and vice
									versa or not.
								</li>
								<li>
									Whether to reopen schools and educational institutions in a
									particular area or not.
								</li>
								<li>
									Whether to invest more on Quarantine centres, PPE kits and
									other important things or not.
								</li>
								<li>
									Whether to allow people for Social gatherings for festivals
									and other events of public sentiment or not.
								</li>
							</ol>
						</p>
					</div>
				</div>
			</div>
			<div className='container-fluid bg-white'>
				<h1 className='text-center mt-5 pt-5'>Our Team</h1>
				<Teams />
			</div>
		</div>
	);
}

export default About;
