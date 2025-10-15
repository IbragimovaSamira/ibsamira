function check() {
          let a = Number(document.getElementById('a').value);
          let b = Number(document.getElementById('b').value);
          let X = Number(document.getElementById('X').value);
          let resultText = "";
          if (a<=X && X<=b) {
          
            resultText="X принадлежит промежутку [a, b]" }
          else {
            resultText="X не принадлежит промежутку [a, b]"

          }
           document.getElementById('result').textContent = resultText;
           document.getElementById('resultField').value = resultText;


              }
       function SubmitForm() {
        document.getElementById('form').submit();
       }