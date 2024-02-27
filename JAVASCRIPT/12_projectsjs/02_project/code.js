const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height=parseInt(document.querySelector('#Height').value)
    const weight=parseInt(document.querySelector('#Weight').value)
    const result=document.querySelector('#Result')

    if (height==='' || height < 0 || isNaN(height)) {
        result.innerHTML="Please give a valid height";
    }
    else if (weight==='' || weight < 0 || isNaN(weight)) {
        result.innerHTML="Please give a valid weight";
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`
        let ans='';
        if (bmi<18.6) {
            ans='UnderWeight'
        }else if(bmi>=18.6 && bmi<=24.9){
            ans='Normal'
        }else{
            ans='OverWeight'
        }
        const paraelm=document.querySelectorAll('.text-muted')
        console.log(paraelm);
        paraelm.forEach( (elm)=>{
            if(elm.id===ans){
                elm.classList.remove('text-muted')
                elm.classList.add('darken-text');
            }
        })
    }
})