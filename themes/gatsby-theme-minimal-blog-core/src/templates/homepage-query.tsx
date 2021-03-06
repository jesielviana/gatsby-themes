import { graphql } from 'gatsby'
import HomepageComponent from '../components/homepage'

export default HomepageComponent

export const query = graphql`
  query($formatString: String!) {
    allPost(
      sort: { fields: date, order: DESC }
      filter: { published: { eq: true } }
      limit: 3
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
