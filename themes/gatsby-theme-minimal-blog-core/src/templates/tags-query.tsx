import { graphql } from 'gatsby'
import TagsComponent from '../components/tags'

export default TagsComponent

export const query = graphql`
  query {
    allPost(
      sort: { fields: tags___name, order: DESC }
      filter: { published: { eq: true } }
    ) {
      group(field: tags___name) {
        fieldValue
        totalCount
      }
    }
  }
`
