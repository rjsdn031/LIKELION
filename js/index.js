document.title = "My Todo Page";

const title = document.getElementById("title");
title.innerText = "Hello World!";

const inp = document.createElement("input");
document.body.append(inp);

const btn = document.createElement("button");
btn.innerText = "추가";
document.body.append(btn);

const ulst = document.createElement("ul");
document.body.append(ulst);

const func = () => {
    if (!inp.value) {
        return;
    }
    const e = document.createElement("li");
    const cb = document.createElement("input");
    cb.setAttribute("type","checkbox");
    e.appendChild(cb);
    e.innerText = inp.value;
    inp.value = ""
    ulst.append(e);
}
funckey = (event) => {
    if (event.keyCode == 13) {
        func()
    }
}

btn.addEventListener("click", func);
inp.addEventListener("keyup", funckey);