document.addEventListener('DOMContentLoaded',()=>{
    let projectsLists = document.getElementById('projects-lists');
    let prevBtn = document.getElementById('prev');
    let nextBtn = document.getElementById('next');
 
    const scrollAmt = 400;
    prevBtn.addEventListener('click',()=>{
     projectsLists.scrollBy({
         left: -scrollAmt,
         behavior : 'smooth' 
     });
    })
    nextBtn.addEventListener('click',()=>{
     projectsLists.scrollBy({
         left: scrollAmt,
         behavior : 'smooth' 
     });
    })
 })