import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Layout from '../components/layout'
import "../stylesheets/mdx.scss"

const Article: React.FC<ArticleProps> = (props) => {
  return (
    <Layout>
      <div className="root-container">
        <main className="main-container">
          <Link className="back-navigation-link" to="/articles">
            &#171;&nbsp;Go back to main list
          </Link>
          <div className="article-header">
            <div className="article-header-content">
              <h1 className="article-header-content-title">{props.data.mdx.frontmatter?.title}</h1>
              <h2 className="article-header-content-subtitle">{props.data.mdx.frontmatter?.subtitle}</h2>
              <span className="article-header-content-tags">
                {props.data.mdx.frontmatter?.tags?.map((tag) => <span><small>{tag}</small></span>)}
              </span>
            </div>
            <span className="article-header-time">
              <span>{props.data.mdx.frontmatter?.date}</span>
              &nbsp;&nbsp;
              <strong>·</strong>
              &nbsp;&nbsp;
              <span>{props.data.mdx.fields?.timeToRead?.text}</span>
            </span>
          </div>
          <section itemProp="articleBody">{props.children}</section>
        </main>
      </div>
    </Layout>
  )
}

type ArticleProps = {
  children: React.ReactNode
  data: {
    mdx: Queries.Mdx
  }
}

export const query = graphql`
    query ($id: String) {
      mdx(id: {eq: $id}) {
        fields {
            timeToRead {
              text
            }
          }
        frontmatter {
          title
          subtitle
          hero_image
          date(formatString: "MMMM D, YYYY")
          tags
        }
      }
    }
  `

export default Article
