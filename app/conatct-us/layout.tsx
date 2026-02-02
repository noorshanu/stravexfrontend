import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with the Stravex team. We\'re here to help with any questions about our crypto portfolio competition platform.',
    openGraph: {
        title: 'Contact Us | Stravex',
        description: 'Get in touch with the Stravex team. We\'re here to help with any questions.',
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
