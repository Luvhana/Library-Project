
const addBookBtn=document.getElementById('addBookBtn');
const cancelBtn=document.getElementById('cancelbtn');
const dialog=document.querySelector('dialog');
const form=document.getElementById("book-form");

addBookBtn.addEventListener("click",()=>{
    dialog.showModal();
});
cancelBtn.addEventListener("click",function(e){
    e.preventDefault();
    dialog.close();
});

form.addEventListener('submit',function(e){
    e.preventDefault();
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const pages=Number(document.getElementById('pages').value);
    const read=document.getElementById('read').checked;
    const comment=document.getElementById('comment').value;

    // addBookToLibrary
    addBookToLibrary(title, author, pages, comment, read);
    displayBook();   // refresh UI
    dialog.close();  // close popup
    form.reset();    // clear inputs
});



const myLibrary=[];

// function Book(title,author,pages,comment,read,id,color){
//     this.title=title;
//     this.author=author;
//     this.pages=pages;
//     this.comment=comment;
//     this.read=read;
//     this.id= id;
//     this.color = color;
//     console.log(`The ${this.title} is written by ${this.author} and is of ${this.pages} pages.`)
// }

class Book{
    constructor(title,author,pages,comment,read,id,color){
        this.title=title;
        this.author=author;
        this.pages= pages;
        this.comment = comment;
        this.read = read;
        this.id = id;
        this.color = color;
    }
    toggleRead(){
        this.read = !this.read;
    }
}

function addBookToLibrary(title,author,pages,comment,read){
    let id = crypto.randomUUID();
    const hue = Math.floor(Math.random()*360);
    const color = `hsl(${hue}, 60%, 40%)`;
    console.log(id);
    const book=new Book(title,author,pages,comment,read,id,color);
    myLibrary.push(book);
}
addBookToLibrary("The Alchemist","Paulo Coelho",163,"Must Read!",true);
addBookToLibrary("It ends with us","Colleen Hoover", 384,"Really want to read",false);

console.log(myLibrary);

function displayBook(){
    const container = document.querySelector(".bookHolder");
    container.innerHTML = "";
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookCard.innerHTML = `
        <div class="spine">
            <h4 class="title">${book.title}</h4>
            <h5 class="author">${book.author}</h5>
            <button class="delete"></button>
        </div>
        <div class="cover">
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p class="status">${book.read ? "Read" : "Not Read"}</p>
            <p class="comment">Comment: ${book.comment}</p>
            <button class="toggle-read">Toggle Read</button>
        </div>
    `;
        bookCard.style.background = book.color;
        bookCard.querySelector(".delete").addEventListener("click",(e)=>{
            e.stopPropagation();
            const index = myLibrary.indexOf(book);
            myLibrary.splice(index,1);
            displayBook();
        })
        bookCard.addEventListener("click",()=>{
            bookCard.classList.toggle("open");
        });
        bookCard.querySelector(".toggle-read").addEventListener("click",(e)=>{
            e.stopPropagation();
            book.toggleRead();
            const status = bookCard.querySelector(".status");
            status.textContent = book.read? "Read": "Not Read";
        })
        container.appendChild(bookCard);
    });
}
displayBook();

