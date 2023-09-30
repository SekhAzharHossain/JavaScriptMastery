let form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();

  let height=parseInt(document.querySelector('#height').value)
  let weight=parseInt(document.querySelector('#weight').value)
  let submit=document.querySelector('button')
  submit.addEventListener('click',function(){
    let result=document.querySelector('#results')
    if(weight==='' || weight<=0 || isNaN(weight)){
      result.innerHTML=`<span>Enter valid weight ${weight}</span>`
    }
    if(height==='' || height<=0 || isNaN(height)){
      result.innerHTML=`<span>Enter valid weight ${height}</span>`
    }

    let bmi=weight/((height*height)*703)
    result.innerHTML=`<span>${bmi}</span>`
  })

})