let Div1 = document.getElementById('root1');
let Div2 = document.getElementById('root2');
let Div3 = document.getElementById('root3');
let Div4 = document.getElementById('root4');
let Div5 = document.getElementById('root5');
let Div6 = document.getElementById('root6');
let Div7 = document.getElementById('root7');



const apiUrl = 'https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/';

function fetchBooks(div, startIndex, endIndex) {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => { 
            for (let index = startIndex; index < endIndex; index++)
            {

                div.innerHTML += `
                    <div class="col-lg-3 col-md-6 g-5">
                        <img class="mb-5 border border-5 border-opacity-50 border-primary" style="width: 200px" src="${data[index].simple_thumb}" />
                        <h5>${data[index].author}</h5>
                        <p>${data[index].title}</p>
                    </div>
                `;
            }    

        })

}

fetchBooks(Div1, 0, 4);   // Feathured Books
fetchBooks(Div2, 5, 13); // Popular Books 1
fetchBooks(Div3, 13, 21); // Popular Books 2
fetchBooks(Div4, 6, 14); // Popular Books 3
fetchBooks(Div5, 9, 17); // Popular Books 4
fetchBooks(Div6, 7, 15); // Popular Books 5




// best selling Books
let Div8 = document.getElementById('root8');
fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
    .then(res => res.json())
    .then(res => best(res));

function best(res) {
    Div8.innerHTML = `
        <div class="col-lg-6 d-flex justify-content-end justify-content-md-center justify-content-sm-center align-items-center">
            <img class="" src="${res.cover}" /> 
        </div>
        <div class="col-lg-6 pt-5">
            <h2 class="title w-50">Best Selling Book</h2>
            <div class="line mb-5"></div>
            <h3 class="mb-3 fs-6 text text-secondary">${res.title}</h3>
            <h3 class="prata-font">${res.fragment_data.title}</h3>
            <p class="w-75 py-4 fs-6 text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptates aperiam ducimus at suscipit officia repellat blanditiis 
                cupiditate molestias facilis quibusdam tenetur totam beatae numquam, ipsa odio similique itaque! Reprehenderit?
            </p>
            <button type="button" class="btn btn-primary rounded-0 border-0 text-dark fw-bold">
                Shop it Now <i class="px-2 fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `;
}














