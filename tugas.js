
 //LAMPU INDIVIDUAL
function saklar() {

    let toggle1 = document.getElementById("default-toggle1")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")
    let toggle4 = document.getElementById("default-toggle4")
    let toggle5 = document.getElementById("default-toggle5")
    let toggle6 = document.getElementById("default-toggle6")
    let toggle7 = document.getElementById("default-toggle7")
    let toggle8 = document.getElementById("default-toggle8")
    let toggle9 = document.getElementById("default-toggle9")
    let toggle10 = document.getElementById("default-toggle10")

    if (toggle1.checked) {
        lampu1.src = "Assets/Images/on.jpg"
    } else {
        lampu1.src = "Assets/Images/off.jpg"
    }
    if (toggle2.checked) {
        lampu2.src = "Assets/Images/on.jpg"
    } else {
        lampu2.src = "Assets/Images/off.jpg"
    }
    if (toggle3.checked) {
        lampu3.src = "Assets/Images/on.jpg"
    } else {
        lampu3.src = "Assets/Images/off.jpg"
    }
    if (toggle4.checked) {
        lampu4.src = "Assets/Images/on.jpg"
    } else {
        lampu4.src = "Assets/Images/off.jpg"
    }
    if (toggle5.checked) {
        lampu5.src = "Assets/Images/on.jpg"
    } else {
        lampu5.src = "Assets/Images/off.jpg"
    }
    if (toggle6.checked) {
        lampu6.src = "Assets/Images/on.jpg"
    } else {
        lampu6.src = "Assets/Images/off.jpg"
    }
    if (toggle7.checked) {
        lampu7.src = "Assets/Images/on.jpg"
    } else {
        lampu7.src = "Assets/Images/off.jpg"
    }
    if (toggle8.checked) {
        lampu8.src = "Assets/Images/on.jpg"
    } else {
        lampu8.src = "Assets/Images/off.jpg"
    }
    if (toggle9.checked) {
        lampu9.src = "Assets/Images/on.jpg"
    } else {
        lampu9.src = "Assets/Images/off.jpg"
    }
    if (toggle10.checked) {
        lampu10.src = "Assets/Images/on.jpg"
    } else {
        lampu10.src = "Assets/Images/off.jpg"
    }
}

// //LAMPU RUANGAN
function ruangan() {

    let toggle11 = document.getElementById("default-toggle11")
    let toggle12 = document.getElementById("default-toggle12")
    let toggle13 = document.getElementById("default-toggle13")
    let toggle14 = document.getElementById("default-toggle14")

    if (toggle11.checked) {

        lampu1.src = "Assets/Images/on.jpg"
        lampu2.src = "Assets/Images/on.jpg"
        lampu3.src = "Assets/Images/on.jpg"
    } else {
        lampu1.src = "Assets/Images/off.jpg"
        lampu2.src = "Assets/Images/off.jpg"
        lampu3.src = "Assets/Images/off.jpg"
    }

    if (toggle12.checked) {
        lampu4.src = "Assets/Images/on.jpg"
    } else {
        lampu4.src = "Assets/Images/off.jpg"
    }
    if (toggle13.checked) {
        lampu5.src = "Assets/Images/on.jpg"
        lampu6.src = "Assets/Images/on.jpg"
    } else {
        lampu5.src = "Assets/Images/off.jpg"
        lampu6.src = "Assets/Images/off.jpg"
    }
    if (toggle14.checked) {
        lampu7.src = "Assets/Images/on.jpg"
        lampu8.src = "Assets/Images/on.jpg"
        lampu9.src = "Assets/Images/on.jpg"
        lampu10.src = "Assets/Images/on.jpg"
    } else {
        lampu7.src = "Assets/Images/off.jpg"
        lampu8.src = "Assets/Images/off.jpg"
        lampu9.src = "Assets/Images/off.jpg"
        lampu10.src = "Assets/Images/off.jpg"
    }
}
