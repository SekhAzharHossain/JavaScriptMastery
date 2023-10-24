const rect=document.querySelector('#center')

rect.addEventListener('mousemove',function(position){
    // console.log(position.clientX)
    // console.log(position.clientY)
    // console.log(rect.getBoundingClientRect())

    let rectangleLocation = rect.getBoundingClientRect();
    // console.log(reactangleLocation)
    let rectangleWidth = rectangleLocation.width
    // console.log(rectangleWidth)
    let leftLocation= position.clientX-rectangleLocation.left

    let valueLeft = 0
    let valueRight = 0

    if(leftLocation < rectangleWidth/2){
        // console.log('left')
        valueLeft=(rectangleWidth/2)-leftLocation
        console.log(valueLeft)
    }else{
        // console.log('right')
        valueRight=leftLocation-(rectangleWidth/2)
        console.log(valueRight)
    }

})
