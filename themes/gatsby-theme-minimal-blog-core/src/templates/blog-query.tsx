import { graphql } from 'gatsby'
import BlogComponent from '../components/blog'

export default BlogComponent

export const query = graphql`
  query($formatString: String!) {
    allPost(
      sort: { fields: date, order: DESC }
      filter: { published: { eq: true } }
    ) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        published
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`
