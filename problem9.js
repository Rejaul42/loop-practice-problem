var books = [50, 150, 120, 200, 280, 380, 190];
for(var i = 0; i < books.length; i++){
    var book = books[i];
    if(book >= 200){
        continue;
    }
    console.log(book);
}