import './blog.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./sanity-client";
import avatar from './avatar_ab.png'
import HomeFooter from '../HomeFooter';
import CategorySelect from './category-select';

export default function Blog({goToContactForm, goToTab, contact, tabs}) {
  const [allPostsData, setAllPosts] = useState(null);
  const [allCategories, setCategories] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Fetch posts
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          body,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          categories[]->,
        }`
      )
      .then((data) => {
        const sortedPosts = data.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        setAllPosts(sortedPosts);
      })
      .catch(console.error);
  }, []);

  // Fetch all categories
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "category"] {
          title,
        }`
      )
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  const filteredPosts = categoryFilter === 'All'
    ? allPostsData 
    : allPostsData?.filter((post) =>
        post.categories.some((category) => category.title === categoryFilter)
      );

  // console.log(allPostsData ? allPostsData[0]: [])

  return (
    <section className="blog-container">
      <div className="blog-titles">
        <div className="blog-title-avatar">
          <h2 className="blog-title">OPINIONS TOO UNPOPULAR TO MONETISE</h2>
          <div className="avatar-container">
            <img src={avatar} id="blog-avatar" />
            <div className="blog-avatar-img-text">with Andrew Blair</div>
          </div>
        </div>
        <h3 className="blog-subtitle">brain + unclogged = blogged</h3>
      </div>

      <div className="blog-search-filter">
        {/* <CategorySelect
          handleCategoryFilter={handleCategoryFilter}
          allCategories={allCategories}
          allPostsData={allPostsData}
        /> */}
      </div>

      <div className="blog-body">
        {/* Show filtered posts or "No posts found" message */}
        {filteredPosts && filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div className="blogpost-link" key={post.slug.current}>
              <Link to={"/blog/" + post.slug.current}>
                <span className="blogpost-hr-img-cr">
                  <img
                    src={post.mainImage.asset.url}
                    alt="blogpost-header"
                    id="blogpost-header-img"
                  />
                  <span>
                    <h2 className="blog-link-text">{post.title}</h2>
                  </span>
                </span>
              </Link>
              <div className="blogpost-info">
                <p className="blog-preview">
                  {post.body[0].children[0].text.split("").slice(0, 200).join("")}...
                </p>
                <p className="blog-date">
                  {post.publishedAt.split("").slice(0, 10).join("")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>

      <HomeFooter
        goToContactForm={goToContactForm}
        goToTab={goToTab}
        contact={contact}
        tabs={tabs}
      />
    </section>
  );
}
