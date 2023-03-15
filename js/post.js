function loadPosts()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
loadPosts();

function displayPost(posts)
{
    const sectionDiv = document.getElementById('secTDiv');
    
    for (const post of posts) {
        const div = document.createElement('div');
        console.log(post);
        div.innerHTML = `
        <h3>title: ${post.title} </h3>
        <h5> UserId : ${post.id} </h5>
        <p> description:${post.body} </p>
        
        `
        div.style.backgroundColor = 'gray';
        div.style.borderRadius = '15px'
        div.style.padding = '4px'
        sectionDiv.appendChild(div);
    }
   
}