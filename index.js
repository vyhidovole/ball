let main = document.getElementById('main')
let cnt = document.getElementById('cnt')
let str = ''

const nums = []
//заполняем main 25 div c id
for (i = 0; i < 25; i++) {
    str += '<div id=' + i + '></div>'
    nums.push(0)
}
main.innerHTML = str

const divs = document.getElementsByTagName('div')
console.log(divs)
for (i in divs) {
    divs[i].onclick = f1

}

function f1() {
    // console.log(this.id)
    let k = Number(this.id)
    let c = 0
    nums[k]++
    if (nums[k] > 1) { nums[k] = 0, c += 100 }
    this.innerHTML = '<img src=' + pics[nums[k]] + '>'
    console.log(k, nums[k])
    cnt.innerHTML = c
    
}


   




const pics = ['', 'ball.png'] //массив с картинками