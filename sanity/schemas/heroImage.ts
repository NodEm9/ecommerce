export default {
    name: 'heroImage',
    type: 'document',
    title: 'Hero Image',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Hero Image',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Hero Image',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Hero Image Slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
    ]
}