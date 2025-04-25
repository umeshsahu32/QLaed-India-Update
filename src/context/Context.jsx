import { createContext, useContext, useState, useEffect } from "react";

const Blogs = createContext();

const Context = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${window.location.origin}/blogs.json?v=${new Date().getTime()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs.json");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);
  return <Blogs.Provider value={blogs}>{children}</Blogs.Provider>;
};

export const BlogState = () => {
  return useContext(Blogs);
};

export default Context;
