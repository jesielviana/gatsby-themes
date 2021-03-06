import { graphql } from 'gatsby'
import TagComponent from '../components/tag'

export default TagComponent

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    allPost(
      sort: { fields: date, order: DESC }
      filter: {
        published: { eq: true }
        tags: { elemMatch: { slug: { eq: $slug } } }
      }
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
