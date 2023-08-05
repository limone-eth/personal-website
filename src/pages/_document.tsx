import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="og:card" content="summary"/>
                <meta name="og:site" content="@limone_eth"/>
                <meta name="og:title" content="Limone - always zesty"/>
                <meta
                    name="og:description"
                    content="Blockchain & Backend Developer."
                />
                <meta
                    name="og:image"
                    content="https://limone.lol/static/images/banner.png"
                />
                <meta name="og:image:alt" content="Backend Development"/>

                <link
                    rel="preload"
                    href="/fonts/nunito-sans-v6-latin-regular.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/nunito-sans-v6-latin-800.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/nunito-sans-v6-latin-900.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/inter-var-latin.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
)
}
