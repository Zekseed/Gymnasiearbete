var json = [];
fetch("./data.json").then((response) => {
  response.json().then((data) => {
    json = data;
  });

});

document.addEventListener("click", function(event) {
    if (event.target.parentNode.tagName == "LI"){

        if (document.getElementById("popup") !== null){
            document.getElementById("popup").remove();
        }

        //for popup window
        const popup = document.createElement("div");

        popup.style.backgroundColor = "rgb(45, 45, 45)";
        popup.style.position = "fixed";
        popup.style.height = "40vw";
        popup.style.width = "90vw";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.zIndex = "1000000000";
        popup.style.borderRadius = "10px";
        popup.style.padding = "10px";
        popup.style.color = "white";
        popup.style.display = "flex";
        popup.style.flexFlow = "row wrap";
        popup.setAttribute("id", "popup");

        //for close button
        const close = document.createElement("img");

        close.style.position = "absolute";
        close.style.top = "0";
        close.style.right = "0";
        close.style.margin = "10px";
        close.style.height = "20px";
        close.style.width = "20px";
        close.src = "./x.svg";
        close.style.cursor = "pointer";
        close.setAttribute("onclick", "closeEvent()")

        popup.appendChild(close);

        //for items in popup window
        const popupItem = document.createElement("div");
        popupItem.style.backgroundColor = "white";
        popupItem.style.flexBasis = "20%";

        popup.appendChild(popupItem);
        const popupItem2 = document.createElement("div");
        popupItem2.style.backgroundColor = "white";
        popupItem2.style.flexBasis = "20%";
        popup.appendChild(popupItem2);
        const popupItem3 = document.createElement("div");
        popupItem3.style.backgroundColor = "white";
        popupItem3.style.flexBasis = "20%";
        popup.appendChild(popupItem3);

        if (event.target.tagName !== "ABBR"){
            const abbr = event.target.parentNode.querySelector("abbr").innerText;
            console.log(json.find((e) => abbr === e.symbol));
            
            document.body.appendChild(popup);
        }
        else {
            const abbr = event.target.innerText;
            console.log(json.find((e) => abbr === e.symbol));
            
            

            document.body.appendChild(popup);
        }

    }
});

function closeEvent(){
    const pop = document.getElementById("popup");

    pop.animate(
        {opacity: [ 1, 0 ]}, 1000
    );
    pop.style.opacity = "0";
    setTimeout(() => {pop.remove();}, 1200);
}