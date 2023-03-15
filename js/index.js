function loadData3()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display(data))
}

function display(datas)
{
    const ul = document.getElementById('user_list');
    for(const data of datas)
    {
        const li = document.createElement('li');
        li.innerText = data.name;
        ul.appendChild(li);
    }
}