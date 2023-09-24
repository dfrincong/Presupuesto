// style
const borde = document.querySelector('table');
borde.style.border = "solid";

// funcionalidades
const url = "https://650ee92e54d18aabfe999cc6.mockapi.io/table";

//enviar
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let fila = Object.fromEntries(new FormData(e.target));
    let config = {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(fila)
    };
    let resp = await (await fetch(url,config)).json();
    // console.log(resp);
});

// agregar a la tabla
addEventListener("DOMContentLoaded", async(e)=>{
    const table = document.querySelector("#datos");
    let resp = await (await fetch(url)).json();
    console.log(resp);
    resp.map(dato=>{
        console.log(dato);
        table.insertAdjacentHTML("beforeend",`
        <tr>
            <td>${dato.id}</td>
            <td>${dato.money}</td>
            <td>${dato.opcion}</td>
            <td>
                <button>+-</button>
                <button>x</button>
            </td>
        </tr>
        `)
    })
});