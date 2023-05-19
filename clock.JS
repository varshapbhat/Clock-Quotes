
timedate = () => {
    let time = new Date();
    let hours = time.getHours();
    if (hours < 12) {
        document.querySelectorAll('h1')[0].innerText = 'Good Morning';
        document.querySelectorAll('.image')[0].innerHTML = '<img src="The Miracle Morning - Tools Helping Me Succeed.jpg">';
        document.querySelectorAll('.time')[0].innerText = time.toLocaleTimeString();
        document.querySelectorAll('.date')[0].innerText = time.toLocaleDateString();
    }
    else if (hours > 12 && hours < 17) {
        document.querySelectorAll('h1')[0].innerText = 'Good Afternoon';
        document.querySelectorAll('.image')[0].innerHTML = '<img src="after.jpg">';
        document.querySelectorAll('.time')[0].innerText = time.toLocaleTimeString();
        document.querySelectorAll('.date')[0].innerText = time.toLocaleDateString();
    }
    else {
        document.querySelectorAll('h1')[0].innerText = 'Good Evening';
        document.querySelectorAll('.image')[0].innerHTML = '<img src="sunset1.jpg">';
        document.querySelectorAll('.time')[0].innerText = time.toLocaleTimeString();
        document.querySelectorAll('.date')[0].innerText = time.toLocaleDateString();
    }


}

setInterval(timedate, 1000);

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const array = ["\" Hope is being able to see that there is light despite all of the darkness. \"", "\" There was never a night or a problem that could defeat sunrise or hope. \"", "\" Let your hopes, not your hurts, shape your future. \"", "\" I think it's a mistake to ever look for hope outside of one's self. \"", "\" You can cut all the flowers but you cannot keep Spring from coming. \"", "\" I don't think of all the misery, but of the beauty that still remains. \"", "\" Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. \""];
const result = getRandomItem(array);
document.querySelectorAll('.quote')[0].innerText = result;









