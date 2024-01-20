export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Product',
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{ type: 'image' }],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of Product',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'price_id',
            type: 'string',
            title: 'Stripe Price ID',
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Category',
            to: [{ type: 'category' }],
        },

    ]
}