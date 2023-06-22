import React from 'react';

const Questions = () => {
    return (
		<div className=' mb-5'>
			<h6 className='text-xl font-bold'>
				1. What is the defference between Props and State?
			</h6>
			<div>
				<div className='overflow-x-auto'>
					<table className='table w-full'>
						{/* head*/}
						<thead>
							<tr>
								<th className='w-1/2'>Props</th>
								<th>State</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							<tr>
								<td>Props are immutable</td>
								<td>State are mutable</td>
							</tr>
							{/* row 2 */}
							<tr className='active'>
								<td>Props are Read Only</td>
								<td>State can be chenged</td>
							</tr>
							{/* row 3 */}
							<tr>
								<td>Propes can access in child component</td>
								<td>State cant access from child component</td>
							</tr>
							{/* row 4 */}
							<tr>
								<td>
									You can pass data from one component to
									another compnent. it calls props drilling
								</td>
								<td>
									You can't pass data to another component.
									You have to hold data this component where
									you declare it.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<h6 className='text-xl font-bold py-3'>
				2. How does work useState?
			</h6>
			<div>
				<p>
					useState returns an array with two element. first thing the
					current value and second thing a function which call setter
					function. When the value will be change just call the setter
					fucntion and react will re-render component without refress
					the web page.
				</p>
			</div>

			<h6 className='text-xl font-bold py-3'>
				3. useEffect what does do without data load?
			</h6>
			<div>
				<p>
					We can data load by using useEffect but except that when we
					want to do something after rendering component then we can
					use useEffect. the useEffect method take tow argument first
					one is anonumas function and second one is an array in this
					array you can pass value or emepty. when you don't want to
					call this hook second time then you have to pass empety
					array and when change any value then if you want to call it
					again then in the dependancy array you have to pass the
					varialbe name.
				</p>
			</div>

			<h6 className='text-xl font-bold py-3'>3. How does react work?</h6>
			<div>
				<p>
					React first make a Vartual DOM. When user change something
					or update something React first change the Vartual DOM then
					she compare to actual DOM. React updates the actual DOM by
					making changes to the DOM nodes and only updates the changed
					DOM nodes . In this process React uses the key to match the virtual DOM node
					with the actual DOM node. React uses a diffing algorithm to
					find the changed element. The diffing algorithm is a clever
					way to figure out which element has changed.
				</p>
			</div>
		</div>
	);
};

export default Questions;