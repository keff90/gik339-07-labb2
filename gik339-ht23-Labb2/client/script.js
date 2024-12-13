const request = new Request("http://localhost:3000/users");

fetch(request)
    .then((response) => {
    console.log(response);
    return response.json();
    })
    .then((users) => {
        users.forEach((user) => {
            const html = `<div style="background-color:${user.color};" >${user.firstName} ${user.lastName}</br>${user.username}</div>`;
            document.body.insertAdjacentHTML('beforeend', html);
        })
    });
