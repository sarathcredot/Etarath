"use client";
import React from 'react'
import BlogBanner from '@/components/blog/Banner'
import Blogs from '@/components/blog/Blogs'
import { useState } from 'react';
import Paragraph from '@/components/common/Paragraph';

function Blog() {

    const [show, setShow] = useState(true)

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