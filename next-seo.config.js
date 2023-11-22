const title = 'limone - always zesty'
const description = 'your friendly neighborhood lemon'
const url = 'https://limone.lol'
const image = `${url}/static/images/banner.png`

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
    title,
    description,
    images: [
      {
        url: image,
        alt: 'Limone',
        type: 'image/png',
      },
    ],
  },
}

export default SEO
