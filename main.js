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

// editar
const dialog = document.querySelector("dialog");
const editarFormulario = document.querySelector("#formularioEdit");
const editarDato = (id)=>{
    editarFormulario.addEventListener("submit", async(e)=>{
        e.preventDefault();
        let fila = Object.fromEntries(new FormData(e.target));
        let config = {
            method: "PUT",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(fila)
        };
        let resp = await (await fetch(url + `/${id}`, config)).json();
        // console.log(resp);
        dialog.close();
        location.reload();
    })
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
            <td class="end">${dato.id}</td>
            <td class="end">${dato.money}</td>
            <td>${dato.opcion}</td>
            <td>
                <button id="${dato.id}" class="editar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path><path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path></svg>
                </button>
            </td>
            <td>
                <button id="${dato.id}" class="eliminar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                </button>
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

    const botonEditar = document.querySelectorAll(".editar");
    console.log(botonEditar);
    botonEditar.forEach(dato=>{
        // console.log(dato);
        dato.addEventListener("click", ()=>{
            dialog.showModal();
            editarDato(dato.id);
        });
    });
});