function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) =>{
    e.preventDefault();
    const form = document.getElementById("form")
    const formData = new FormData(form);
    const XHR = new XMHLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.send(formDate);
  });
};

window.addEventListener('load',post);