import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = ({ blogs, handelMarkAsRead, handelTotalBookMarked }) => {
	return (
		<div className='px-5'>
			{blogs.map(blog => (
				<SingleBlog
					key={blog._id}
					blog={blog}
					handelMarkAsRead={handelMarkAsRead}
					handelTotalBookMarked={handelTotalBookMarked}
				/>
			))}
		</div>
	);
};

export default Blogs;