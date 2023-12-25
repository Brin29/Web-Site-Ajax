const d = document,
  $main = d.getElementById("main");

const getHTML = (options) => {
  // Detructuracion del objeto se omite el method porque por defecto es GET
  const {url, succes, error} = options,
  // Instancia del XMLHttpRequest
    xhr = new XMLHttpRequest();

    // Validacion de datos
  xhr.addEventListener("readystatechange", e => {
    if (xhr.readyState !== 4) return;
    
    if (xhr.status >= 200 && xhr.status < 300){
      // responseText = es el contenido de la URL en texto
      let html = xhr.responseText;
      // Convierte el contenido texto a HTML y lo pone en el main
      succes(html)
    }

    else{
      // Error
      let message = xhr.statusText || "Ocurrio un error";
      error(`Error:${xhr.status}: ${message}`)
    }
  })

  // Asignacion de valores
  xhr.open("GET", url);
  xhr.setRequestHeader("Content-Type", "text/html: charset=utf-8");
  xhr.send()
}



// El contenido por defecto
// Local Storage
// El local storage se asigna al final en los clicks
d.addEventListener("DOMContentLoaded", e => {
  // Si el theme de local es igual a nulo se asigna home por defecto
  if (localStorage.getItem("theme") === null){
    localStorage.setItem("theme", "home")
  }

  // Si el localStorage home
  if (localStorage.getItem("theme") === "home"){

    e.preventDefault()
    // Se asigna el sitio web
    getHTML({
      url: "../assets/home.html",
      succes:(html) => {
        $main.innerHTML = html
      },
      error:(err) => {
        $main.innerHTML = `<p>${err}</p>`
      }
    })
    // Y toma su localStorage
    localStorage.setItem("theme", "home")
    
  }


  if (localStorage.getItem("theme") === "about"){

    e.preventDefault()
    getHTML({
      url: "../assets/about.html",
      succes:(html) => {
        $main.innerHTML = html
      },
      error:(err) => {
        $main.innerHTML = `<p>${err}</p>`
      }
    })
    localStorage.setItem("theme", "about")

  }


  if (localStorage.getItem("theme") === "contact"){

    e.preventDefault()
    getHTML({
      url: "../assets/contact.html",
      succes:(html) => {
        $main.innerHTML = html
      },
      error:(err) => {
        $main.innerHTML = `<p>${err}</p>`
      }
    })
    localStorage.setItem("theme", "contact")

  } 


  if (localStorage.getItem("theme") === "services"){
    
  e.preventDefault()
  getHTML({
    url: "../assets/services.html",
    succes:(html) => {
      $main.innerHTML = html
    },
    error:(err) => {
      $main.innerHTML = `<p>${err}</p>`
    }
  })
  localStorage.setItem("theme", "services")

  }
})


d.addEventListener("click", e =>{

  if (e.target.matches("#home-link")){
  
    e.preventDefault()
    getHTML({
      url: "../assets/home.html",
      succes:(html) => {
        $main.innerHTML = html
      },
      error:(err) => {
        $main.innerHTML = `<p>${err}</p>`
      }
    })
    localStorage.setItem("theme", "home")

  }


  if (e.target.matches("#about-link")){

    e.preventDefault()
    getHTML({
      url: "../assets/about.html",
      succes:(html) => {
        $main.innerHTML = html
      },
      error:(err) => {
        $main.innerHTML = `<p>${err}</p>`
      }
    })
    localStorage.setItem("theme", "about")
  }


  if (e.target.matches("#contact-link")){
    
    e.preventDefault()
    getHTML({
      url: "../assets/contact.html",
      succes:(html) => {
        $main.innerHTML = html
      },
      error:(err) => {
        $main.innerHTML = `<p>${err}</p>`
      }
    })
    localStorage.setItem("theme", "contact")

  }

  if (e.target.matches("#services-link")){

    e.preventDefault()
    getHTML({
      url: "../assets/services.html",
      succes:(html) => {
        $main.innerHTML = html
      },
      error:(err) => {
        $main.innerHTML = `<p>${err}</p>`
      }
    })
    localStorage.setItem("theme", "services")

  }
})