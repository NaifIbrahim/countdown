const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "Friday",
    "saturday"]

const months = [
    "jan",
    "feb",
    "mar",
    "april",
    "May",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"]

const countDown = document.getElementsByClassName('date')
// console.log(countDown[0].children[3])
const paraTime = document.getElementsByTagName('h2')[0]
// console.log(paraTime)


const futureDate = new Date("2023-05-09T10:30:00")
// console.log(futureDate.getTime())

paraTime.innerHTML = `Test On ${days[futureDate.getDay()]} ${futureDate.getDate()} ${months[futureDate.getMonth()]} 
    ${futureDate.getFullYear()} ${futureDate.getHours()} : ${futureDate.getMinutes()} AM `



function countFunction() {

    const today = new Date()

    const timeDiff = futureDate.getTime() - today.getTime()
    // console.log(timeDiff)

    if (timeDiff > 0) {

        countDown[0].children[0].innerText = Math.floor(timeDiff / 1000 / 60 / 60 / 24) + " Days"
        countDown[0].children[1].innerText = (Math.floor(timeDiff / 1000 / 60 / 60) - (Math.floor(timeDiff / 1000 / 60 / 60 / 24) * 24)) + " Hours"

        countDown[0].children[2].innerText = Math.floor(timeDiff / 1000 / 60 - (Math.floor(timeDiff / 1000 / 60 / 60) * 60)) + " Minutes"

        countDown[0].children[3].innerText = Math.floor(timeDiff / 1000) - ((Math.floor(timeDiff / 1000 / 60) * 60)) + " Seconds"
    } else {
        countDown[0].innerHTML = "<p>Time expired</p>"
    }








}
setInterval(countFunction, 1000)
