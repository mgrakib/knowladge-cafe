import React, { useEffect, useState } from 'react';
import { addToDb, getDataFromLocalStorage } from '../utility/common';
import Blogs from './Blogs/Blogs';
import Bookmarked from './Bookmarked/Bookmarked';
import { ToastContainer, toast } from "react-toastify";
import Questions from './Questions/Questions';


const Body = () => {
    
    // set state to set blog 
    const [blogs, setBlogs] = useState([]);
    // this useEffect use for fetchi data 
    useEffect(() => {
        const fetchingData = async () => {
            const res = await fetch('fakeData.json');
            const data = await res.json();
            setBlogs(data);
        }
        fetchingData();
    }, [])

    // set state for totalReadTime 
    const [totalReadTime, setTotalReadTime] = useState(0);

    // declar markas read function 
    const handelMarkAsRead = (blog) => {
        let storedReadTime = getDataFromLocalStorage('read-time');
        
        if (storedReadTime) {
            storedReadTime = storedReadTime + parseInt(blog.readTime);
        } else {
            storedReadTime = parseInt(blog.readTime);
        }
        
        setTotalReadTime(storedReadTime);
        addToDb('read-time', storedReadTime)
        
        
    }

    // use useEffect for reload and it change totalReadTime
    useEffect(() => {
        let storedReadTime = getDataFromLocalStorage("read-time");
        if (storedReadTime) {
            setTotalReadTime(storedReadTime);
            return;
        }
        setTotalReadTime(0);
    }, [blogs])


    const [totalBookMarked, setTotalBookMarked] = useState(0);
    const [bookMarkedBlog, setBookMarkedBlog] = useState({});
    const handelTotalBookMarked = (blog) => {
        
        let storedBookMarkedBlog = getDataFromLocalStorage("book-marked");
        
        if (storedBookMarkedBlog) {
            for (const id in storedBookMarkedBlog) {
                if (id === blog._id) {
                    toast("It's Already Added");
                    return;
                }
                storedBookMarkedBlog = { ...storedBookMarkedBlog , [blog._id]:blog.blogTitle};   
            }
            
            
        } else {

            storedBookMarkedBlog = { [blog._id]: blog.blogTitle };
        }
        addToDb("book-marked", storedBookMarkedBlog);

        const allBookMark = getDataFromLocalStorage("book-marked");
        setBookMarkedBlog(allBookMark);
        let totalBookMarkerValue = 0;
        for (const id in allBookMark) {
            totalBookMarkerValue = totalBookMarkerValue + 1;
        }
        setTotalBookMarked(totalBookMarkerValue);
    }

    useEffect(() => {
        const allBookMark = getDataFromLocalStorage("book-marked");
		
		let totalBookMarkerValue = 0;
        if (allBookMark) {
            setBookMarkedBlog(allBookMark);
            for (const id in allBookMark) {
				totalBookMarkerValue = totalBookMarkerValue + 1;
			}
            setTotalBookMarked(totalBookMarkerValue);
            return;
        }
        setTotalBookMarked(0);
    }, [blogs])

    return (
		<div className='grid grid-cols-[1fr] md:grid-cols-[3fr_2fr] gap-5'>
			<Blogs
				blogs={blogs}
				handelMarkAsRead={handelMarkAsRead}
				handelTotalBookMarked={handelTotalBookMarked}
			/>
			<Bookmarked
				totalReadTime={totalReadTime}
				totalBookMarked={totalBookMarked}
				bookMarkedBlog={bookMarkedBlog}
            />
            
            
		</div>
	);
};

export default Body;