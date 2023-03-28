
// DOM elemanları belirlendi.
const input = document.querySelector('#myInput');
let messageElement = document.getElementById("message");
let li;
// Alert box gizlendi.
messageElement.style.display = "none"
// Listeye görev ekleme fonksiyonu. Burada aldığımız input değeri ile bir li elemanı ve buna referans olması için TextNode oluşturuyoruz.
function addTask() {

    let inputVal = input.value;
    if (inputVal === '') {
      alert("Lütfen bir görev girin.");
      return false;
    }

    li = document.createElement("li");
    li.classList.add("list-item")
    li.addEventListener("click", toggleTask);
    let textNode = document.createTextNode(inputVal);

    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "&#10060;";
    deleteBtn.className = "delete-btn";
    li.appendChild(textNode);
    li.appendChild(deleteBtn);
    document.getElementById("myList").appendChild(li);

    messageElement.style.display = "block"
    messageElement.textContent = "Başarılı bir şekilde eklendi!";
    setTimeout(function() {
        messageElement.style.display = "none";
      }, 1500);

    input.value = "";

      // Silme fonksiyonu
    deleteBtn.addEventListener("click", function() {
      li.remove();
      messageElement.style.display = "block"
      messageElement.textContent = "Başarılı bir şekilde silindi!";
      setTimeout(function() {
        messageElement.style.display = "none";
      }, 1500);
    });
  }

  // Toggle fonksiyonu. Elemanın üstüne tıklayınca onun tamamlandığını belirtmek için ona bir sınıf ekleme çıkarma işlemi yapıyor.
  function toggleTask() {
    if (this.classList.contains("completed")) {
      this.classList.remove("completed");
      textNode.style.textDecoration = "none";
    } else {
      this.classList.add("completed");
      textNode.style.textDecoration = "line-through";
    }
  }