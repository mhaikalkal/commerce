const Items = [
    {
        id: 1,
        title: 'Brown Dress',
        slug: 'brown-dress',
        img: ['https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwyMTk2NDAzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1600&q=60', 'https://images.unsplash.com/photo-1504051898397-67f872da760b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwyMTk2NDAzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1600&q=60'],
        price: 280000,
        isNew: true,
        sale: [true, 20],
        isFeatured: true
    },
    {
        id: 2,
        title: 'Blue Dress',
        slug: 'blue-dress',
        img: ['https://images.unsplash.com/photo-1523355276824-bf3820c39fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw4NTg0MzAwfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1600&q=60','https://images.unsplash.com/photo-1523355098838-817cca126ced?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w4NTg0MzAwfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1600&q=60'],
        price: 280000,
        isNew: false,
        sale: [false, 0],
        isFeatured: true
    },
    {
        id: 3,
        title: 'Pink Dress',
        slug: 'pink-dress',
        img: ['https://images.unsplash.com/photo-1596139316009-dd46498a0226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxSMkRpYUNTSUU4a3x8ZW58MHx8fHx8&auto=format&fit=crop&w=1600&q=60','https://images.unsplash.com/photo-1573516037033-bccea591d544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxSMkRpYUNTSUU4a3x8ZW58MHx8fHx8&auto=format&fit=crop&w=1600&q=60'],
        price: 280000,
        isNew: false,
        sale: [false, 0],
        isFeatured: true
    },
    {
        id: 4,
        title: 'Green Dress',
        slug: 'green-dress',
        img: ['https://images.unsplash.com/photo-1600988617849-e99dcfe97f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8V0t5YVR3N1F0VjB8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=60','https://images.unsplash.com/photo-1600988618956-e1fd461d8d02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8V0t5YVR3N1F0VjB8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=60'],
        price: 280000,
        isNew: false,
        sale: [false, 0]
    },
    {
        id: 5,
        title: 'Woman Jeans',
        slug: 'woman-jeans',
        img: ['https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1600&q=60', 'https://images.unsplash.com/photo-1533825828907-94649041aa67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjZ8NTU0NjY0MjJ8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=60'],
        price: 280000,
        isNew: false,
        sale: [false, 0],
        isFeatured: true
    },
    {
        id: 6,
        title: 'Ripped Jeans',
        slug: 'ripped-jeans',
        img: ['https://images.unsplash.com/photo-1598937777033-0c57157110c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3x0S2VqRTkwY2owTXx8ZW58MHx8fHx8&auto=format&fit=crop&w=1600&q=60', 'https://images.unsplash.com/photo-1598937776679-c8278c79407d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnx0S2VqRTkwY2owTXx8ZW58MHx8fHx8&auto=format&fit=crop&w=1600&q=60'],
        price: 280000,
        isNew: false,
        sale: [false, 0],  
    },
]

export default Items;