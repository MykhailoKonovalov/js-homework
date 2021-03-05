async function createPost() {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'New post',
            body: 'Lorem ipsum bla bla bla',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return await result.json()
}

function createComment(id) {
    fetch(`https://jsonplaceholder.typicode.com/comments`, {
        method: 'POST',
        body: JSON.stringify({
            email: 'user@gmail.com',
            body: 'Nice post!',
            name: 'user',
            postId: id
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => document.getElementById("comment").innerHTML = json.body);
}

createPost().then((json)=>{
    let id = json.id
    createComment(id)
})
