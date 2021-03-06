function requestUserRepos(username) {
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}/repos`;
    const list = document.querySelector('.repos-list');
    xhr.open('GET', url, true);
    xhr.onload = function () {
        const data = JSON.parse(this.response);
        console.log(data);

        for (let i in data) {
            const createItem = document.createElement("div");
            createItem.className = 'repo-item';
            createItem.innerHTML = `<a href=${data[i].html_url}>${data[i].name}</a> ` + `<div>${data[i].description}</div>`;
            list.append(createItem);
            console.log('Repo:', data[i].name);
            console.log('Description:', data[i].description);
            console.log('URL:', data[i].html_url);
            console.log('=========================')

        }
    }
    xhr.send();
}

requestUserRepos('flippyboi');

function getUsername() {
    const username = document.getElementById("check").value;
    const header = document.querySelector('.usrname');
    if (username != "") {
        header.textContent = `-${username}-`;
        document.querySelectorAll(".repo-item").forEach(e => e.remove());
        requestUserRepos(username);
    }
}