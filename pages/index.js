import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = props => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(({show}) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}


Index.getInitialProps = async function() {
  const result = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await result.json()
  console.log(`Show data fetched. Count ${data.length}`)
  return {
    shows: data
  }
}

export default Index
