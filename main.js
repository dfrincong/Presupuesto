// style
const borde = document.querySelector('table');
borde.style.border = "solid";

// funcionalidad
const url = "https://650ee92e54d18aabfe999cc6.mockapi.io/table";
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let fila = Object.fromEntries(new FormData(e.target));
    let config = {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(fila)
    };
    const resp = await (await fetch(url,config)).json();
    console.log(resp);
});
