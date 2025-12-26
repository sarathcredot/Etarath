import Heading1 from "../common/Heading1";
import Heading2 from "../common/Heading2";
import Heading3 from "../common/Heading3";
import Paragraph from "../common/Paragraph";

import SubHeading1 from "../common/Subheading1";


export default function BlogCard() {


    return (
        <div className="bg-[#0f0f0f] rounded-xl overflow-hidden">
            <img
                src="/images/home/banner_img.webp"
                alt="blog"
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <p className="text-[15px] uppercase tracking-wide text-gray-200 mb-2">
                    History
                </p>

                <Paragraph className="font-semibold leading-snug mb-3">
                    Lorem Ipsum Dolor, Sedconsectetur Adipiscing
                </Paragraph>

                <p className="text-xs text-gray-400">
                    December 4, 2022 • 0 Comments
                </p>
            </div>
        </div>
    );
}
