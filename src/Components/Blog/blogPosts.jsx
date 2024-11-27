import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "./sanity-client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import BlogNav from "./blog-nav";
import HomeFooter from "../HomeFooter";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function BlogPost({goToContactForm, goToTab, contact, tabs}) {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        categories[]->
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  const categories = postData.categories.map((category => `${category.title}; `))
 
  return (
    <div className="blogpost-container">

      <div>
        <h1 className="blogpost-title">{postData.title}</h1>
      </div>
        <div></div>
      <div className="blogpost-header-container">
      <BlogNav />
      <img 
      src={urlFor(postData.mainImage).width(200).url()} 
      alt="blog-header-image"
      id="blogpost-header-image-wide" />
      </div>
      <div className="blogpost-content"> 
      <p className='blogpost-date'>Published on: {postData.publishedAt.split('').slice(0, 10).join('')}</p>
      <p className='blogpost-categories'>Categories: {categories}</p>
      
        <BlockContent
          blocks={postData.body}
          projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
          dataset="production"
        />
      </div>
      <HomeFooter 
           goToContactForm={goToContactForm}
           goToTab={goToTab}  
           contact={contact}
           tabs={tabs}
           />
    </div>
  );
}