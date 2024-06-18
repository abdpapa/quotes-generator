let arr=[];
const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const quoteAuthor=document.getElementById('author');
const loader=document.getElementById('loader');
async function getQuotes()
{   load();
    const apiurl='https://type.fit/api/quotes';
    try{
        const response=await fetch(apiurl);
        arr= await response.json();
       newquotes();
    }
    catch{
        console.log("nothing");
    }
}
function newquotes()
{    load();
    const quote=arr[Math.floor(Math.random()*arr.length)];
    console.log(quote);
    if(quote.text.length>120)
    {
            quoteText.classList.add('long-quote');
    }
    else
    {
        
        quoteText.classList.remove(".long-quote");
            
    }
    complete();
    quoteText.textContent=quote.text;
    if(quote.author==null)
    {
            quoteAuthor.textContent='Unknown';
    }
    else
    {
    quoteAuthor.textContent=quote.author;
    }
       
}
document.getElementById('new-quote').addEventListener("click",function(){
    newquotes();
  
});
function load()
{
    loader.hidden=false;
    quoteContainer.hidden=true;
}
function complete()
{
    loader.hidden=true;
    quoteContainer.hidden=false;
}
function tweet()
{
    const twitterurl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`; // `` brackets so we can pass strings
    window.open(twitterurl,'_blank');//blank enables a new tab

}
document.getElementById('twitter').addEventListener("click",function(){
    tweet();
});


getQuotes();

