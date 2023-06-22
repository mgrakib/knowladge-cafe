import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = ({ blog, handelMarkAsRead, handelTotalBookMarked }) => {
	const {
		blogCoverImage,
		picture,
		name,
		publishDate,
		readTime,
		blogTitle,
		tags,
	} = blog;

	// get month and date 
	const month = new Date(publishDate).toLocaleString('en-Us', { month: 'long' });
	const date = new Date(publishDate).toLocaleString('en-Us', { day: '2-digit' });

	// time difference 
	const nowDateTime = new Date().getTime();
	const publishDateTime = new Date(publishDate).getTime();
	const timeDifference = nowDateTime - publishDateTime;
	var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


	return (
		<div className='card w-full mb-5 glass'>
			{/* blog cover img  */}
			<figure className='p-2 overflow-hidden rounded-lg'>
				<img
					src={blogCoverImage}
					alt='car!'
					className='rounded-lg w-full'
				/>
			</figure>
			<div className='card-body'>
				{/* author info  */}
				<div className='flex items-center justify-between'>
					<span className='flex gap-3 items-center'>
						<div className='w-[50px] h-[50px] bg-red-300 rounded-full overflow-hidden'>
							<img
								src={picture}
								alt=''
							/>
						</div>
						<div>
							<h6 className='font-bold'>{name}</h6>
							<p className='text-[14px] text-[#11111199]'>
								{month + " " + date + " (" + daysDifference + " Days ago)"}
							</p>
						</div>
					</span>
					<div className='text-[14px]'>
						{readTime < 10 ? "0" + readTime : readTime} min read{" "}
						<span
							onClick={() => handelTotalBookMarked(blog)}
							className='cursor-pointer'
						>
							<FontAwesomeIcon icon={faBookmark} />
						</span>
					</div>
				</div>
				<h2 className='text-[30px] md:text-[40px] leading-[160%] font-bold'>
					{blogTitle}
				</h2>
				<div className='flex gap-1'>
					{tags.map(tag => (
						<span
							key={tag}
							className='text-gray-400'
						>
							#{tag}
						</span>
					))}
				</div>
				<div className='card-actions justify-end'>
					<p
						onClick={() => handelMarkAsRead(blog)}
						className='text-[#6047EC] font-bold cursor-pointer'
					>
						Mark as read
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleBlog;