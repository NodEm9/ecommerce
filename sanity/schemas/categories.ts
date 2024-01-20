export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Category',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Category Slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
    ]
}