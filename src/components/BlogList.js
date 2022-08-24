import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";

function BlogList() {
  const blogs = useSelector((state) => state.filters);
  const searchKey = useSelector((state) => state.search.searchKeyWord);

  return (
    <React.Fragment>
      {blogs
        .filter((blog) => blog.title.toLowerCase().includes(searchKey))
        .map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            author={blog.author}
            category={blog.categories}
            date={blog.date}
            readTime={blog.readTime}
          />
        ))}
    </React.Fragment>
  );
}

export default BlogList;
