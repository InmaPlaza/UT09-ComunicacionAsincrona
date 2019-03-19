function cargarFichero(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var file = request.response;

            añadirDatos("Categorias",file.AlmacenCategoria);
            añadirDatos("Usuarios",file.AlmacenUsuario);
            añadirDatos("Actores",file.AlmacenActores);
            añadirDatos("Directores",file.AlmacenDirectores);
            añadirDatos("Producciones",file.AlmacenProducciones);
            añadirDatosAsignados("AsignarCategorias",file.AlmacenCategoriasProd);
            añadirDatosAsignados("AsignarActores",file.AlmacenActoresProd);
            añadirDatosAsignados("AsignarDirectores",file.AlmacenDirectoresProd);
        }
    };
    request.open("GET","js/json/VideoSystem.json",true);
    request.responseType = 'json';
    request.send();
}


function crearFichero(){
    var almacenCategoria = new Array();
    var almacenUsuarios = new Array();
    var almacenProducciones = new Array();
    var almacenActores = new Array();
    var almacenDirectores = new Array();
    var almacenCategoriaProd = new Array();
    var almacenActorProd = new Array();
    var almacenDirectorProd = new Array();

    var database= indexedDB.open("VideoSystem");
	database.onsuccess = function(evento){
		var db = evento.target.result;
		var almacen = db.transaction(["Categorias","Actores","Directores","Usuarios","Producciones","AsignarCategorias","AsignarActores","AsignarDirectores"]);

		var objectStoreCategoria = almacen.objectStore("Categorias");
		objectStoreCategoria.openCursor().onsuccess = function(evento){
			var cursor = evento.target.result;

			if(cursor){
				almacenCategoria.push(cursor.value);
				cursor.continue();
			}
		}

		var objectStoreActores = almacen.objectStore("Actores");
		objectStoreActores.openCursor().onsuccess = function(evento){
			var cursor = evento.target.result;

			if(cursor){
				almacenActores.push(cursor.value);
				cursor.continue();
			}
		}

		var objectStoreDirectores = almacen.objectStore("Directores");
		objectStoreDirectores.openCursor().onsuccess = function(evento){
			var cursor = evento.target.result;

			if(cursor){
                almacenDirectores.push(cursor.value);
				cursor.continue();
			}
		}

		var objectStoreUsuarios = almacen.objectStore("Usuarios");
		objectStoreUsuarios.openCursor().onsuccess = function(evento){
			var cursor = evento.target.result;

			if(cursor){
				almacenUsuarios.push(cursor.value);
				cursor.continue();
			}
		}

		var objectStoreProducciones = almacen.objectStore("Producciones");
		objectStoreProducciones.openCursor().onsuccess = function(evento){
			var cursor = evento.target.result;

			if(cursor){
				almacenProducciones.push(cursor.value);
				cursor.continue();
			}
        }
        
        var objectStoreCategoriaProd = almacen.objectStore("AsignarCategorias");      
		
        objectStoreCategoriaProd.openCursor().onsuccess = function(evento){
            
            var cursor = evento.target.result;

            if(cursor){
                almacenCategoriaProd.push(cursor.value);
                cursor.continue();
            }
        }

        var objectStoreActorProd = almacen.objectStore("AsignarActores");      
    
        objectStoreActorProd.openCursor().onsuccess = function(evento){
            var cursor = evento.target.result;

            if(cursor){
                almacenActorProd.push(cursor.value);
                cursor.continue();
            }
        }

        var objectStoreDirectorProd = almacen.objectStore("AsignarDirectores");      
    
        objectStoreDirectorProd.openCursor().onsuccess = function(evento){
            var cursor = evento.target.result;

            if(cursor){
                almacenDirectorProd.push(cursor.value);
                cursor.continue();
            }
        }

		almacen.oncomplete = function(evento){
            var objeto = {
                Usuario: comprobarCookie("username"),
                AlmacenCategoria: almacenCategoria,
                AlmacenActores: almacenActores,
                AlmacenDirectores: almacenDirectores,
                AlmacenProducciones: almacenProducciones,
                AlmacenUsuario: almacenUsuarios,
                AlmacenCategoriasProd: almacenCategoriaProd,
                AlmacenActoresProd: almacenActorProd,
                AlmacenDirectoresProd: almacenDirectorProd
            }

            var ruta = "js/json/Servidor.php";
            var req = new XMLHttpRequest();
            data = JSON.stringify(objeto);

            req.open('POST', ruta, true);
            req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            req.send('data='+ data);
        }		
	}
}