const global = {
    currentpage: window.location.pathname,
}
const boxes = document.querySelectorAll('.box');
const bar = document.getElementById('open');
const menu = document.querySelector('.navB')

const people = [
    {
        name: 'Jamie Williams',
        location: 'Lagos, Nigeria',
        comments: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis quaerat minima hic ipsam dolorem quae pariatur quis veritatis explicabo.  ',
        imageURL: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        name: 'John Wilmer',
        location: 'Lagos, Nigeria',
        comments: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis quaerat minima hic ipsam dolorem quae pariatur quis veritatis explicabo.  ',
        imageURL: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        name: 'Christian Brook',
        location: 'Lagos, Nigeria',
        comments: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis quaerat minima hic ipsam dolorem quae pariatur quis veritatis explicabo.  ',
        imageURL: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        name: 'Martha Palmer',
        location: 'Lagos, Nigeria',
        comments: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis quaerat minima hic ipsam dolorem quae pariatur quis veritatis explicabo.  ',
        imageURL: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
        name: 'Joanne Corinthians',
        location: 'Lagos, Nigeria',
        comments: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis quaerat minima hic ipsam dolorem quae pariatur quis veritatis explicabo.  ',
        looking: 'Female looking for Male',
        imageURL: 'https://randomuser.me/api/portraits/women/7.jpg'
    },
];

const next = document.getElementById('next');
const img = document.querySelector('.img');
const profileInfo = document.querySelector('.profile-info')

function* createPeopleIterator() {
    let index = 0
    while (true) {
        yield people[index++ % people.length]
    }
}
const iterator = createPeopleIterator();
next.addEventListener('click', () => {
    const person = iterator.next().value;
    img.src = person.imageURL;
    profileInfo.querySelector('h3').textContent = person.name
    profileInfo.querySelectorAll('p')[0].textContent = `${person.comments}`;
    profileInfo.querySelectorAll('p')[1].textContent = `From ${person.location} `;

})
next.click();


function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        }
    })
}


checkboxes();

function init() {
    switch (global.currentpage) {
        case '/index.html':

            window.addEventListener('scroll', checkboxes)
            break;


        case '/work.html':

            window.addEventListener('scroll', checkboxes)
            break;


    }
}

document.addEventListener('DOMContentLoaded', init)
