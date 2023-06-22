import React from 'react';
import user from '../../image/user.jpg'

const Header = () => {
    return (
		<div className='py-2 px-5 flex flex-col md:flex-row justify-between items-center gap-5'>
			<h1 className='text-2xl font-bold text-center md:text-left'>Knowledge Cafe With MG</h1>
			<span className='w-[40px] h-[40px] inline-block rounded-full overflow-hidden'>
				<img
					src={user}
                    alt=''
                    className='w-full object-cover'
				/>
            </span>
            
		</div>
	);
};

export default Header;