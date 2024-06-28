let qiymet = prompt("qiymet daxil edin")
if (qiymet>=90 && qiymet<= 100){
    console.log("istifadecinin aldigi qiymet" + qiymet + " - A")
}else if (qiymet>=80 && qiymet<=89){
    console.log("istifadecinin aldigi qiymet" + qiymet + " - B")
}
else if (qiymet>=70 && qiymet<= 79){
    console.log("istifadecinin aldigi qiymet" + qiymet + " - C")
}
else if (qiymet>=60 && qiymet<= 69){
    console.log("istifadecinin aldigi qiymet" + qiymet + " - D")
}
else if(qiymet>=0 && qiymet<=59){
    console.log("istifadecinin aldigi qiymet" + qiymet + " - F")
}