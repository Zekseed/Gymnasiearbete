var json = [];
fetch("./data.json").then((response) => {
  response.json().then((data) => {
    json = data;
  });

});

const data = JSON.stringify(json);

document.addEventListener("click", function(event) {
    if (event.target.parentNode.tagName !== "LI" && document.getElementById("popup") !== null){
        document.getElementById("popup").remove();
    }

    if (event.target.parentNode.tagName == "LI"){

        //for removing the popup window if it already exists and thus not overlapping
        if (document.getElementById("popup") !== null){
            document.getElementById("popup").remove();
        }

        //for popup window
        const popup = document.createElement("div");
        popup.setAttribute("id", "popup");

        //for close button
        const close = document.createElement("img");
        close.setAttribute("id", "close");
        close.setAttribute("onclick", "closeEvent()")
        close.src = "./x.svg";
        popup.appendChild(close);

        //for items in popup window (important factor of 2.25)
        const popupItem = document.createElement("div");
        const element = getComputedStyle(event.target.parentNode);
        console.log(element.backgroundColor);
        popupItem.className = "popupItem";
        popupItem.style.backgroundColor = element.backgroundColor;

        const tempdiv = document.createElement("div");
        const b = document.createElement("b");
        const em = document.createElement("em");
        const abb = document.createElement("abbr");
        const strong = document.createElement("strong");
        const data = document.createElement("data");

        //for elements in popupItem
        popupItem.appendChild(tempdiv.cloneNode(true));
        popupItem.childNodes[0].appendChild(b.cloneNode(true));
        popupItem.childNodes[0].appendChild(em.cloneNode(true));
        popupItem.childNodes[0].className = "top"

        popupItem.appendChild(abb.cloneNode(true));

        popupItem.appendChild(tempdiv.cloneNode(true));
        popupItem.childNodes[2].appendChild(strong.cloneNode(true));
        popupItem.childNodes[2].appendChild(data.cloneNode(true));
        popupItem.childNodes[2].className = "bottom"

        //check if the user clicked on the abbr tag since it has already checked if the user clicked on a child of an li element
        if (event.target.tagName !== "ABBR"){
            const abbr = event.target.parentNode.querySelector("abbr").innerText;

            for (var i = 0; i < json.length; i++) {
                if (json[i].symbol === abbr) {

                    var temp = popupItem.cloneNode(true);
                    temp.querySelector("b").innerText = json[i].z;
                    temp.querySelector("em").innerText = json[i].n;
                    temp.querySelector("abbr").innerText = json[i].symbol;
                    if (json[i].z !== null || json[i].n !== null){
                        temp.querySelector("strong").innerText = json[i].z + json[i].n;
                    }
                    if (json[i].decay_2 !== "" && json[i].decay_3 !== ""){
                        temp.querySelector("data").innerText = json[i].decay_1 + "\n" + json[i].decay_2 + "\n" + json[i].decay_3;
                    }
                    else if (json[i].decay_2 !== ""){
                        temp.querySelector("data").innerText = json[i].decay_1 + "\n" + json[i].decay_2;
                    }
                    else {
                        temp.querySelector("data").innerText = json[i].decay_1;
                    }
                    console.log(temp);
                    popup.appendChild(temp);
                }
            }

            document.body.appendChild(popup);
        }
        //otherwise it would mean that the user clicked on the abbr tag
        else {
            const abbr = event.target.innerText;

            for (var i = 0; i < json.length; i++) {
                if (json[i].symbol === abbr) {

                    var temp = popupItem.cloneNode(true);
                    temp.querySelector("b").innerText = json[i].z;
                    temp.querySelector("em").innerText = json[i].n;
                    temp.querySelector("abbr").innerText = json[i].symbol;
                    if (json[i].z !== null || json[i].n !== null){
                        temp.querySelector("strong").innerText = json[i].z + json[i].n;
                    }
                    if (json[i].decay_2 !== "" && json[i].decay_3 !== ""){
                        temp.querySelector("data").innerText = json[i].decay_1 + "\n" + json[i].decay_2 + "\n" + json[i].decay_3;
                    }
                    else if (json[i].decay_2 !== ""){
                        temp.querySelector("data").innerText = json[i].decay_1 + "\n" + json[i].decay_2;
                    }
                    else {
                        temp.querySelector("data").innerText = json[i].decay_1;
                    }
                    console.log(temp);
                    popup.appendChild(temp);
                }
            }
        }
    }
});
//for closing and animating the popup window
function closeEvent(){
    const pop = document.getElementById("popup");

    pop.animate(
        {opacity: [ 1, 0 ]}, 1000
    );
    pop.style.opacity = "0";
    setTimeout(() => {pop.remove();}, 1200);
}