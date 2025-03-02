const btn = document.getElementById('btn1').addEventListener('click', function(){
    alert('Board updated successfully');
    const taskAssign = document.getElementById('task').innerText
    let taskconverted = parseInt(taskAssign) -1;
    console.log(taskconverted);
    document.getElementById('task').innerText = taskconverted;
    const navTask = document.getElementById('nav-task').innerText
    let navConverted = parseInt(navTask) +1;
    console.log(navConverted);
    document.getElementById('nav-task').innerText = navConverted;
    const container = document.getElementById('activity-section');
    const p = document.createElement('p');
    const mobileBtn = document.getElementById('mobile-btn').innerText
    const now = new Date();
    const newTime = now.toLocaleTimeString();
    p.innerText = `
    You have Complete The Task ${mobileBtn} at ${newTime}
    `
    container.appendChild(p);




    document.getElementById('btn1').disabled = true;

    
})

const btn2 = document.getElementById('btn2').addEventListener('click', function(){
    alert('Board updated successfully');
    const taskAssign = document.getElementById('task').innerText
    let taskconverted = parseInt(taskAssign) -1;
    console.log(taskconverted);
    document.getElementById('task').innerText = taskconverted;
    const navTask = document.getElementById('nav-task').innerText
    let navConverted = parseInt(navTask) +1;
    console.log(navConverted);
    document.getElementById('nav-task').innerText = navConverted;
    const container = document.getElementById('activity-section');
    const p = document.createElement('p');
    const dark = document.getElementById('dark-mode').innerText
    const now = new Date();
    const newTime = now.toLocaleTimeString();
    p.innerText = `
    You have Complete The Task ${dark} at ${newTime}
    `
    container.appendChild(p);




    document.getElementById('btn2').disabled = true;
})

const btn3 = document.getElementById('btn3').addEventListener('click', function(){
    alert('Board updated successfully');
    const taskAssign = document.getElementById('task').innerText
    let taskconverted = parseInt(taskAssign) -1;
    console.log(taskconverted);
    document.getElementById('task').innerText = taskconverted;
    const navTask = document.getElementById('nav-task').innerText
    let navConverted = parseInt(navTask) +1;
    console.log(navConverted);
    document.getElementById('nav-task').innerText = navConverted;
    const container = document.getElementById('activity-section');
    const p = document.createElement('p');
    const home = document.getElementById('home-page').innerText
    const now = new Date();
    const newTime = now.toLocaleTimeString();
    p.innerText = `
    You have Complete The Task ${home} at ${newTime}
    `
    container.appendChild(p);




    document.getElementById('btn3').disabled = true;
})

const btn4 = document.getElementById('btn4').addEventListener('click', function(){
    alert('Board updated successfully');
    const taskAssign = document.getElementById('task').innerText
    let taskconverted = parseInt(taskAssign) -1;
    console.log(taskconverted);
    document.getElementById('task').innerText = taskconverted;
    const navTask = document.getElementById('nav-task').innerText
    let navConverted = parseInt(navTask) +1;
    console.log(navConverted);
    document.getElementById('nav-task').innerText = navConverted;
    const container = document.getElementById('activity-section');
    const p = document.createElement('p');
    const emoji = document.getElementById('add-emoji').innerText
    const now = new Date();
    const newTime = now.toLocaleTimeString();
    p.innerText = `
    You have Complete The Task ${emoji} at ${newTime}
    `
    container.appendChild(p);




    document.getElementById('btn4').disabled = true;
})

const btn5 = document.getElementById('btn5').addEventListener('click', function(){
    alert('Board updated successfully');
    const taskAssign = document.getElementById('task').innerText
    let taskconverted = parseInt(taskAssign) -1;
    console.log(taskconverted);
    document.getElementById('task').innerText = taskconverted;
    const navTask = document.getElementById('nav-task').innerText
    let navConverted = parseInt(navTask) +1;
    console.log(navConverted);
    document.getElementById('nav-task').innerText = navConverted;
    const container = document.getElementById('activity-section');
    const p = document.createElement('p');
    const openAi = document.getElementById('open-ai').innerText
    const now = new Date();
    const newTime = now.toLocaleTimeString();
    p.innerText = `
    You have Complete The Task ${openAi} at ${newTime}
    `
    container.appendChild(p);




    document.getElementById('btn5').disabled = true;
})

const btn6 = document.getElementById('btn6').addEventListener('click', function(){
    alert('Board updated successfully');
    const taskAssign = document.getElementById('task').innerText
    let taskconverted = parseInt(taskAssign) -1;
    console.log(taskconverted);
    document.getElementById('task').innerText = taskconverted;
    const navTask = document.getElementById('nav-task').innerText
    let navConverted = parseInt(navTask) +1;
    console.log(navConverted);
    document.getElementById('nav-task').innerText = navConverted;
    const container = document.getElementById('activity-section');
    const p = document.createElement('p');
    const job = document.getElementById('job').innerText
    const now = new Date();
    const newTime = now.toLocaleTimeString();
    
    p.innerText = `
    You have Complete The Task ${job} at ${newTime}
    `
    container.appendChild(p);




    document.getElementById('btn6').disabled = true;
})

