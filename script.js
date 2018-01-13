function translator(str){
  return str.split('').map(function(char){
    var d = Hangul.disassemble(char);

    if(d[3] && Hangul.isVowel(d[1]) && Hangul.isVowel(d[2]))
    {
      var tmp = d[3];
      d[3] = d[2];
      d[2] = tmp;
    }
    return Hangul.assemble(d);
    }).join('');
};

//Load일 경우, 로딩이느려짐, 따라서 DOM로드가 완료되면 바로 이벤트를 실행하라는 의미
window.addEventListener('DOMContentLoaded',function(){
  document.querySelector('.change').addEventListener('click',function(){
    var changeText = translator(document.querySelector('.original-text').value);
    document.querySelector('.result-text').innerText = changeText;
  });
});
