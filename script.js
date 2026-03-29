
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
    const title=document.getElementById('title').ariaValueMax;
    const author=document.getElementById('author').ariaValueMax;
    const pages=document.getElementById('pages').ariaValueMax;
    const read=document.getElementById('read').ariaChecked;
    const comment=document.getElementById('comment').ariaValueMax;

    // addBookToLibrary
})



const myLibrary=[];

function Book(title,author,pages,comment,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.comment=comment;
    this.read=read;
}
