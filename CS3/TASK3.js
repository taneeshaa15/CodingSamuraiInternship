document.addEventListener('DOMContentLoaded', () => {
    const blogSection = document.getElementById('blog');

    const posts = [
        {
            title: 'My First Blog Post',
            date: '2024-06-01',
            content: 'This is the content of my first blog post.'
        },
        {
            title: 'Another Day, Another Post',
            date: '2024-06-02',
            content: 'Content of another blog post.'
        }
    ];

    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><em>${post.date}</em></p>
            <p>${post.content}</p>
        `;
        blogSection.appendChild(postElement);
    });
});
