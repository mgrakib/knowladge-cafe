import React from 'react';


const Bookmarked = ({ totalReadTime, totalBookMarked, bookMarkedBlog }) => {
	const blogsTitle = Object.values(bookMarkedBlog);

	return (
		<div className=' p-2'>
			<div className='p-5 bg-[rgb(96,71,236,.1)] rounded-lg'>
				<h2 className='text-[#6047EC] font-bold text-[24px] text-center'>
					Spent time on read : {totalReadTime} min
				</h2>
			</div>

			<div className='mt-[24px] p-5 bg-[rgb(96,71,236,.1)] rounded-lg'>
				<h2 className=' font-bold text-[24px]'>
					Bookmarked Blogs : {totalBookMarked}
				</h2>

				{blogsTitle.map((blogTitle, index) => (
					<div
						key={index}
						className='bg-white p-4 my-4 rounded-md'
					>
						<p>{blogTitle}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Bookmarked;