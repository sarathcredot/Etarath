

import React from 'react'
import BlogGrid from './BlogGrid'
import BlogSidebar from './BlogSidebar'

function Blogs() {
    return (

        // <div className="">
        //     <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
        //         <BlogGrid />
        //         <BlogSidebar />
        //     </div>
        // </div>

        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Blog Content */}
                <div className="lg:col-span-8">
                    <BlogGrid />   
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4">
                    <BlogSidebar />
                </div>

            </div>
        </div>
    )
}

export default Blogs