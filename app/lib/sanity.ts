import { createClient } from 'next-sanity'
import imageurlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 's1n1kxof',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true
})

const builder = imageurlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}