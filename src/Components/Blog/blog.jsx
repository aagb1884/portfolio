import './blog.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./sanity-client";
import avatar from './avatar_ab.png'
import HomeFooter from '../HomeFooter';

export default function Blog() {
  const [allPostsData, setAllPosts] = useState(null);

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
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <section className="blog-container">
    <div className="blog-titles">
        <div className='blog-title-avatar'>
        <h2 className='blog-title'>
        OPINIONS TOO UNPOPULAR TO MONETISE</h2>
        <div className='avatar-container'>
        <img src={avatar} id='blog-avatar'/>
        <div className='blog-avatar-img-text'>with Andrew Blair</div>
        </div>
        </div>
    <h3 className='blog-subtitle'>
    brain + unclogged = blogged</h3>
    </div>
    
    <div className="blog-body">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <div className="blogpost-link">
            <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
              <span key={index}
              className="blogpost-hr-img-cr">
                <img 
                src={post.mainImage.asset.url} 
                alt="blogpost-header" 
                id="blogpost-header-img"/>
                <span>
                  <h2 className='blog-link-textt'>{post.title}</h2>
                </span>
              </span>
            </Link>
            <p className='blog-preview'>{post.body[0].children[0].text.split('').slice(0, 100).join('')}...</p>
            <p className='blog-date'>{post.publishedAt.split('').slice(0, 10).join('')}</p>
            </div>
          ))}
      </div>
          <HomeFooter />
    </section>
  );
}