import Header from './Header'

const layoutStyles = {
  margin:20,
  padding:20,
  border: "1px solid #DDD"
}

const Layout = props => {
  return (
    <div style={layoutStyles}>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
