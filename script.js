function inputEl(tag, attr, attrval, attr1, attrval1, attr2, attrval2, attr3, attrval3,attrval4) {
    var ele = document.createElement(tag);
    ele.setAttribute(attr, attrval);
    ele.setAttribute(attr1, attrval1);
    ele.setAttribute(attr2, attrval2);
    ele.setAttribute(attr3, attrval3);
    ele.setAttribute(attrval4)

    return ele;
}
function breakEl(tag) {
    var ele = document.createElement(tag)
    return ele;
}
function lableEl(tag, attr, attrval, cont) {
    var ele = document.createElement(tag);
    ele.setAttribute(attr, attrval);
    ele.innerHTML = cont
    return ele;
}

// form

//first name input
var inputfield = document.querySelector("form")
var fnLab = lableEl("lable", "for", "first-name", "FIRST NAME")
inputfield.append(fnLab)
var fn = inputEl("input", "type", "text", "id", "first-name", "placeholder", "YOUR FIRST NAME", "class", "fn","required")
inputfield.append(fn)
var br1 = breakEl("br")
inputfield.append(br1)
//last name input
var lnLab = lableEl("lable", "for", "ln", "LAST NAME")
inputfield.append(lnLab)
var ln = inputEl("input", "type", "text", "id", "ln", "placeholder", "YOUR LAST NAME", "class", "ln","required")
inputfield.append(ln)
var br2 = breakEl("br")
inputfield.append(br2)
// Addres input
var addLab = lableEl("lable", "for", "add", "ADDRESS")
inputfield.append(addLab)
var add = inputEl("input", "type", "text", "id", "add", "placeholder", "YOUR ADDRESS", "class", "add","required")
inputfield.append(add)
var br4 = breakEl("br")
inputfield.append(br4)
// Pincode input
var pinLab = lableEl("lable", "for", "pin", "PINCODE")
inputfield.append(pinLab)
var pin = inputEl("input", "type", "number", "id", "pin", "placeholder", "YOUR PINCODE", "class", "pin","required")
inputfield.append(pin)
var br5 = breakEl("br")
inputfield.append(br5)
// Gender
var headGen = document.createElement("div")
headGen.setAttribute("class", "cont")
headGen.innerHTML = "GENDER"
inputfield.append(headGen)
var male = inputEl("input", "type", "radio", "id", "male", "value", "MALE", "class", "male","required")
inputfield.append(male)
var maleLab = lableEl("lable", "for", "male", "MALE")
inputfield.append(maleLab)
var female = inputEl("input", "type", "radio", "id", "female", "value", "FEMALE", "class", "female","required")
inputfield.append(female)
var femaleLab = lableEl("lable", "for", "male", "FEMALE")
inputfield.append(femaleLab)
var br6 = breakEl("br")
inputfield.append(br6)
// ratio buttons
var headFood = document.createElement("div")
headFood.setAttribute("class", "cont2")
headFood.innerHTML = "YOUR FAV FOOD"
inputfield.append(headFood)
var f1 = inputEl("input", "type", "checkbox", "id", "f1", "value", "BRIYANI", "class", "pd")
inputfield.append(f1)
var food1Lab = lableEl("lable", "for", "f1", "BRIYANI")
inputfield.append(food1Lab)
var f2 = inputEl("input", "type", "checkbox", "id", "f2", "value", "SAMBAR RISE", "class", "f2")
inputfield.append(f2)
var food2Lab = lableEl("lable", "for", "f2", "SAMBAR RISE")
inputfield.append(food2Lab)
var f3 = inputEl("input", "type", "checkbox", "id", "f3", "value", "CURD RISE", "class", "f3")
inputfield.append(f3)
var food3Lab = lableEl("lable", "for", "f3", "CURD RICE")
inputfield.append(food3Lab)
var br3 = breakEl("br")
inputfield.append(br3)
var f4 = inputEl("input", "type", "checkbox", "id", "f4", "value", "NOODLES", "class", "f4")
inputfield.append(f4)
var food4Lab = lableEl("lable", "for", "f4", "NOODLES")
inputfield.append(food4Lab)
var f5 = inputEl("input", "type", "checkbox", "id", "f5", "value", "TANDOORI", "class", "f5")
inputfield.append(f5)
var food5Lab = lableEl("lable", "for", "f5", "TANDOORI")
inputfield.append(food5Lab)




// button
// var nt = (fn.value = "", ln.value = "", add.value = "", pin.value = "", f1.checked=false, f2.checked = false, f3.checked = false, f4.checked = false, f5.checked= false, male.checked = false, female.checked = false)

var br = document.createElement("br");
inputfield.append(br)
var a = document.createElement("button");
a.setAttribute("class", "btn");
a.setAttribute("class", "bg-primary")
a.innerHTML = "SUBMIT"
inputfield.append(a);
inputfield.addEventListener("submit", (event) => {

    event.preventDefault()

    var tb = document.querySelector("table tbody")

    var fin = document.createElement("tr")
    tb.append(fin)

    var res = document.createElement("td");
    res.innerHTML = fn.value
    if(fn.value.length< 2){
        alert("give a valid first name")
       
    }
    fin.append(res)
    var res = document.createElement("td");
    res.innerHTML = ln.value
    if(ln.value.length< 2){
        alert("give a valid last name")
        
    }
    fin.append(res)
    var res = document.createElement("td");
    res.innerHTML = add.value
    if(add.value.length< 2){
        alert("give a valid address ")
        
    }
    fin.append(res)
    var res = document.createElement("td");
    res.innerHTML = pin.value
    if(pin.value.length< 2){
        alert("give a valid pin code")
        
    }
    fin.append(res)
    var genCont = document.createElement("td")
    fin.append(genCont)
    if (male.checked) {
        genCont.innerHTML = male.value
    } else if (female.checked) {
        genCont.innerHTML = female.value

    } else {
        alert("please select the gender")
        
    }

    var sum = document.createElement("td")
    fin.append(sum)
    var ul = document.createElement("ul")
    ul.setAttribute("class", "uL")
    sum.append(ul)
    var check = 0;
    if (f1.checked) {
        var res = document.createElement("li");
        res.innerHTML = f1.value
        ul.append(res)
        check++;
    }
    if (f2.checked) {
        var res = document.createElement("li");
        res.innerHTML = f2.value
        ul.append(res)
        check++;
    }
    if (f3.checked) {
        var res = document.createElement("li");
        res.innerHTML = f3.value
        ul.append(res)
        check++;
    }
    if (f4.checked) {
        var res = document.createElement("li");
        res.innerHTML = f4.value
        ul.append(res)
        check++;
    }
    if (f5.checked) {
        var res = document.createElement("li");
        res.innerHTML = f5.value
        ul.append(res)
        check++;
    }
    if (check<2) {
        alert("Menditary to choose three optional foods ")
    }
    var mt = (fn.value = "", ln.value = "", add.value = "", pin.value = "", f1.checked = false, f2.checked = false, f3.checked = false, f4.checked = false, f5.checked = false, male.checked = false, female.checked = false)
    return mt;
})
inputfield.append(btn)




// function foo(event){

// }
// 

function foo() {

}



