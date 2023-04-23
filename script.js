
     /*---1---*/

    let myAside = document.querySelector("aside");
    //console.log(myAside);
    let myDiv = myAside.querySelectorAll("div")[2];
    //console.log(myDiv);

    let myTwitter = myDiv.querySelectorAll("a")[1];
    //console.log(myTwitter);
    myTwitter.addEventListener("click", function(e){
       myTwitter.remove();
    })
    /*---2---*/
    let myContainer = document.querySelectorAll(".col-md-6")[0];
    //console.log(myContainer);
    let myText = myContainer.querySelectorAll(".lead");
    //console.log(myText);
    let myLink = myText[1].querySelector("a");
    //console.log(myLink);
    myLink.addEventListener("click", function(e){
        myText[0].remove();
    })

    /*---3---*/

    function mousOverAuthor(){
        let myMeta = document.querySelectorAll(".blog-post-meta");
        //console.log(myMeta);
        for(let i = 0; i < myMeta.length; i++){
            let myAuthors = myMeta[i].getElementsByTagName("a")[0];
            myAuthors.addEventListener("mouseover", function(e){
                alert(myAuthors.innerText);
            })
        }
    }

mousOverAuthor();