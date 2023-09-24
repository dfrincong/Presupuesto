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
    let resp = await (await fetch(url, config)).json();
    // console.log(resp);
    location.reload();
});

// eliminar
const eliminarDato = async(id)=>{
    let config = {
      method: "DELETE",
      headers: {"content-type":"application/json"}
    };
    let resp = await (await fetch(url + `/${id}`, config)).json();
    // console.log(resp);
    location.reload();
  };

// la tabla
addEventListener("DOMContentLoaded", async(e)=>{
    const table = document.querySelector("#datos");
    let resp = await (await fetch(url)).json();
    // console.log(resp);
    resp.map(dato=>{
        // console.log(dato);
        table.insertAdjacentHTML("beforeend",`
        <tr>
            <td>${dato.id}</td>
            <td>${dato.money}</td>
            <td>${dato.opcion}</td>
            <td>
                <button id="${dato.id}" class="editar">+-</button>
            </td>
            <td>
                <button id="${dato.id}" class="eliminar">x</button>
            </td>
        </tr>
        `);
    });

    const botonEliminar = document.querySelectorAll(".eliminar");
    console.log(botonEliminar);
    botonEliminar.forEach(dato=>{
        // console.log(dato);
        dato.addEventListener("click", ()=>{
            eliminarDato(dato.id);
        });
    });
});


