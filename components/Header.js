import Link from 'next/link'

const linkStyles = {
  margin: 20
}

export default () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyles}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyles}>About</a>
      </Link>
    </div>
  )
}
