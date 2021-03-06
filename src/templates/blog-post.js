import React from 'react';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div className="content-text">
              <p>{description}</p>
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default props => {
  const { markdownRemark: post } = props.data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet>
          {' '}
          <title>{`Blog | ${post.frontmatter.title}`}</title>{' '}
          <link
            href="https://fonts.googleapis.com/css?family=Cabin:600|EB+Garamond"
            rel="stylesheet"
          />
        </Helmet>
      }
      title={post.frontmatter.title}
    />
  );
};

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
