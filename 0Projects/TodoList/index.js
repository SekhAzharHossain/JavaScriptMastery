let AddedItemList=[];
let targetElementToAdd=document.getElementsByClassName('targetForInjectingInputList')[0];
let targetForCompletedList=document.getElementsByClassName('Completed')[0];
let completedItemsList=[];

const DisplayList=(AddedItemList)=>{
    AddedItemList.forEach(item=>{
        let newItem=document.createElement('li');
        newItem.innerHTML=`<label class="sameLine">${item}<button id=${item}>Completed</button></label>`
        targetElementToAdd.appendChild(newItem);
    });
}

const onClickAddItem=(inputValue)=>{
    AddedItemList.push(inputValue);
    targetElementToAdd.innerHTML='';
    DisplayList(AddedItemList);
}
let addButton=document.getElementById('addButton').addEventListener('click',()=>{
    let inputValue=document.getElementById('input').value;
    document.getElementById('input').value='';
    if(inputValue===''){
        console.log(typeof(inputValue));
    }
    else{
        onClickAddItem(inputValue);
        
    }
});
// push element in the completedItemsList
const Push=(ele)=>{
    completedItemsList.push(...ele);
    if(completedItemsList.length !== 0) DisplayCompletedList(completedItemsList)
}
// display for the completed section
const DisplayCompletedList=(completedItemsList)=>{
    targetForCompletedList.innerHTML=''
    completedItemsList.forEach(item=>{
        let newElement=document.createElement('li')
        newElement.innerHTML=`<label class="sameLine">${item}<button class="redcolor" id=${item}>Remove</button></label>`
        targetForCompletedList.appendChild(newElement)
    })
}


// If completed button is clicked
let targetElementToSwitch=document.getElementsByClassName('targetForInjectingInputList')[0];
if(targetElementToSwitch!=null){
    targetElementToSwitch.addEventListener('click',(e)=>{
        // console.log(e.target.id)
        let index=AddedItemList.indexOf(e.target.id);
        // console.log(index)
        let ele=AddedItemList.splice(index,1);
        Push(ele);
        // console.log(completedItemsList);
        targetElementToAdd.innerHTML=''
        DisplayList(AddedItemList)
    });
}

// If Remove button is clicked
targetForCompletedList.addEventListener('click',(e)=>{
    let index=completedItemsList.indexOf(e.target.id);
    completedItemsList.splice(index,1);
    DisplayCompletedList(completedItemsList);
})