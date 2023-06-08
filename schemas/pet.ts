export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },

        {
            name: 'picture',
            type: 'image',
            title: 'Picture',
        },

        {
            name: 'imageUrl',
            type: 'string',
            title: 'Imageurl'
        },


    ]
}