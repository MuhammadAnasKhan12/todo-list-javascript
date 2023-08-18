function addtask() {
    var input = document.getElementById("input").value;
    var text = document.createTextNode(input);
    var main = document.getElementById("main");
    var input1 = document.getElementById("input");


    
    //  task
    var task = document.createElement("div");
    task.setAttribute("class", "task");
    task.append(text);
    

    //delete 
    var delete1 = document.createElement("button");
    delete1.innerText = "DELETE";
    delete1.setAttribute("onclick","del(this)")


    //edit
    var edit1 = document.createElement("button");
    edit1.innerText = "EDIT";
    edit1.setAttribute("onclick","edit(this)")
    
    //options
    var opt = document.createElement("div");
    opt.setAttribute("class", "options");
    opt.append(delete1);
    opt.append(edit1);
    
    // list div
    var list = document.createElement("div");
    list.setAttribute("class", "list");
    list.append(task);
    list.append(opt);
    //main
    main.append(list);

    input1.value = "";
    
}

function del(x) {
    console.log(x);    
    x.parentNode.parentNode.remove();
}
 
function edit(x) {
    var prev = x.parentNode.parentNode.childNodes[0].innerText;
    var prom = prompt("EDIT", prev);
    x.parentNode.parentNode.childNodes[0].innerText=prom;
}