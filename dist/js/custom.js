let myProjects = document.getElementById("my-projects"); 
for (let y = 0; y <=5; y++){
    for(let x = 1; x<=y; x++ ){
        myProjects.innerHTML = `${y} `;
    }
}