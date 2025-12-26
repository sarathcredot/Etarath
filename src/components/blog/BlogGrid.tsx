import BlogCard from "./BlogCard";
import Heading1 from "../common/Heading1";
import Heading2 from "../common/Heading2";
import Heading3 from "../common/Heading3";
import Paragraph from "../common/Paragraph";

import SubHeading1 from "../common/Subheading1";
import Heading4 from "../common/Heading4";
import Button from "../common/Button";

export default function BlogGrid() {


    return (
        <div>
            <Heading4 className="text-2xl font-semibold mb-8">
                More Insights
            </Heading4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <BlogCard key={item} />
                ))}
            </div>

            <div className="flex justify-center mt-10 mb-10">

                <Button
                    type="link"
                    href="/"
                    variant="solid"
                    color="primary"
                    textColor="black"
                >
                    Load More
                </Button>
            </div>
        </div>
    );
}
