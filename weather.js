// let inputValue=document.getElementById('input')
// let search=document.getElementById('button')
// let temparature=document.getElementById('temparature')
// let weatherType=document.getElementById('type')
// let wind=document.getElementById('wind')
// let windSpeed=document.getElementById('speed')
// let humdty=document.getElementById('humi')
// let hpercentage=document.getElementById('hp')
// let loc=document.getElementById('locname')
// let cel=document.getElementById('cel')
// let h=document.getElementById('h')
// let info=document.getElementById('info')
// let lc=document.getElementById('location')

// let apiKey='e2a57ba4c19e3600c8b000f7ed78133d'

// search.addEventListener('click',Searching)
// function Searching(){
//     if(inputValue.value=="")
//         alert("please enter some location")
//     else{
//         url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${apiKey}`
//         fetch(url).then(res => res.json())
//         .then(data =>{
//             console.log(data)
//             const {name}=data
//             loc.innerText=name
//             lc.innerHTML+=`<div><span class="material-symbols-outlined" id="loc">
//                     location_on
//                 </span></div>`
//             const {temp}=data.main
//             temparature.innerText=Math.ceil(temp-273)
//             cel.innerHTML+=`<span id="c">&#x2103;</span>`
//             const {description}=data.weather[0]
//             weatherType.innerText=description
//             info.innerHTML+=`<span class="material-symbols-outlined" id="air">
//                         air
//                     </span>`
//             const{speed}=data.wind
//             windSpeed.innerText=`${speed}m/s`
//             wind.innerText='wind speed'
            
//             const {humidity}=data.main
//             h.innerHTML+=`<span class="material-symbols-outlined" id="hum">
//                         water_drop
//                         </span>`
//             hpercentage.innerText=`${humidity}%`
//             humdty.innerText='humidity'
            
//         })
//         .catch( ()=>{
//             alert("Enter A Valid Location")
//         })
//         inputValue.value=""
//     }
// }


let inputValue = document.getElementById('input');
let search = document.getElementById('button');
let temparature = document.getElementById('temparature');
let weatherType = document.getElementById('type');
let wind = document.getElementById('wind');
let windSpeed = document.getElementById('speed');
let humdty = document.getElementById('humi');
let hpercentage = document.getElementById('hp');
let loc = document.getElementById('locname');
let cel = document.getElementById('cel');
let h = document.getElementById('h');
let lc = document.getElementById('licon');
let Humidity=document.getElementById('humidity')
let block=document.getElementById('block1')
let date=document.getElementById('date')

let apiKey = 'e2a57ba4c19e3600c8b000f7ed78133d';

search.addEventListener('click', Searching);

function Searching() {
    if (inputValue.value === "") {
        alert("Please enter a location");
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${apiKey}`;

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        })
        .then(data => {
            console.log(data)
            const { name } = data;
            loc.innerText = name;

            const { temp } = data.main;
            temparature.innerText = Math.ceil(temp - 273);
            cel.innerHTML = `<span id="c">&#x2103;</span>`; // Using innerHTML directly

            const { description } = data.weather[0];
            weatherType.innerText = description;

            Humidity.innerHTML=`<span class="material-symbols-outlined" id="air">
            air
            </span>`
            h.innerHTML=`<span class="material-symbols-outlined" id="hum">
                        water_drop
                        </span>`
            const { speed } = data.wind;
            windSpeed.innerText = `${speed} m/s`;
            wind.innerText = 'Wind Speed';

            const { humidity } = data.main;
            hpercentage.innerText = `${humidity}%`;
            humdty.innerText = 'Humidity';
            lc.innerHTML=`<span class="material-symbols-outlined" id="loc">
                    location_on
                    </span>`
            block.innerHTML=`<img src="cloud.webp" alt="cloud">`
            date.innerText=new Date()

        })
        .catch(err => {
            alert("Enter a valid location");
            console.error(err);
        });

    inputValue.value = "";
}
