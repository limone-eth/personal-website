import Container from './Container'

const Footer = () => {
  return (
    <footer>
      <Container>
        <hr className="border-1 border-base-200 mb-8" />
        <div className="flex gap-10 justify-center">
          <a
            href="https://github.com/limone-eth/"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            href="https://warpcast.com/limone.eth"
            target="_blank"
            rel="noopener noreferrer"
          >
            farcaster
          </a>
          <a
            href="https://x.com/limone_eth"
            target="_blank"
            rel="noopener noreferrer"
          >
            x
          </a>
          <a
            href="https://paragraph.xyz/@limone.eth"
            target="_blank"
            rel="noopener noreferrer"
          >
            paragraph
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
