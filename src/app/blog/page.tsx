"use client";
import React from 'react'
import BlogBanner from '@/components/blog/Banner'
import Blogs from '@/components/blog/Blogs'
import { useState, useEffect } from 'react';
import Paragraph from '@/components/common/Paragraph';
import axios from 'axios';

function Blog() {

    const [show, setShow] = useState(true)

    useEffect(() => {
        // Fetch blog data from the API
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_UR}/common/blogs`);
                const blogs = response?.data?.data;

                console.log("Fetched blogs:", blogs);

                // Check if there are any blogs available
                if (blogs.length === 0) {
                    console.log("No blogs available");
                    // setShow(false);
                } else {
                    console.log("Blogs are available");
                    // setShow(true);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
                // setShow(false);
            }
        };

        fetchBlogs();
    }, []);


    return (
        <div>

            {
                show ?
                    <>
                        <BlogBanner />
                        <Blogs />
                    </>

                    :
                    <div className="text-center mb-20">
                        <Paragraph className="text-lg font-medium mb-2">
                            No blogs available
                        </Paragraph>
                        <Paragraph className="opacity-70 text-sm">
                            New articles will be published soon. Stay tuned.
                        </Paragraph>
                    </div>
            }



        </div>
    )
}

export default Blog