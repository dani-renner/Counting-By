function counter(countUpTo,countingBy){
  const countingArray=[];
  for (let count=0;count<=countUpTo;count+=countingBy){
    countingArray.push(count);
  }
  return countingArray;
}

$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const maxCount = parseInt($("input#max-count").val());
    const countBy = parseInt($("input#multiple").val());
    let results = counter(maxCount,countBy);
    let htmlText = '';
    results = results.forEach(function(num) {
      htmlText += "<li> "+ num+"</li>";
    })
    $("ul").prepend(htmlText);

  })
})