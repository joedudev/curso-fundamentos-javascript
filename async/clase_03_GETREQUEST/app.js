/**
 * Referencias a elementos del DOM
 */
const DOM = {
	postListContainer: document.querySelector("#posts-container"),
	postTemplate: document.getElementById("single-post"),
	postForm: document.querySelector("#new-post form"),
	fetchButton: document.querySelector("#available-posts button"),
};

const API_URL = "https://jsonplaceholder.typicode.com/posts";

/**
 * Realiza una petición HTTP genérica utilizando Fetch API.
 * @async
 * @function sendHTTPRequest
 * @param {string} method - Método HTTP (ej. "GET", "POST").
 * @param {string} url - URL de la API de destino.
 * @param {Object} [data] - Datos opcionales a enviar en el cuerpo de la petición.
 * @returns {Promise<Object>} La respuesta de la API convertida a JSON.
 */
async function sendHTTPRequest(method, url, data) {
	const options = {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
	};

	if (data) {
		options.body = JSON.stringify(data);
	}

	const response = await fetch(url, options);
	return await response.json();
}

/**
 * Crea un elemento HTML (article) que representa un post individual.
 * @function createPostElement
 * @param {Object} postData - Datos del post (id, title, body).
 * @returns {HTMLElement} El elemento article estructurado con sus hijos.
 */
function createPostElement(postData) {
	const postContainer = document.createElement("article");
	postContainer.id = postData.id;
	postContainer.classList.add("post-item");

	const title = document.createElement("h2");
	title.textContent = postData.title;

	const body = document.createElement("p");
	body.textContent = postData.body;

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "DELETE Content";

	postContainer.append(title, body, deleteButton);
	return postContainer;
}

/**
 * Renderiza una lista de posts en el contenedor principal del DOM.
 * @function renderPosts
 * @param {Array<Object>} posts - Arreglo de objetos con los posts a mostrar.
 */
function renderPosts(posts) {
	// Limpiamos el contenedor antes de renderizar para evitar duplicados
	DOM.postListContainer.innerHTML = "";

	for (const post of posts) {
		const postElement = createPostElement(post);
		DOM.postListContainer.append(postElement);
	}
}

/**
 * Obtiene los posts desde la API y desencadena su renderizado.
 * @async
 * @function fetchAndRenderPosts
 */
async function fetchAndRenderPosts() {
	try {
		const posts = await sendHTTPRequest("GET", API_URL);
		renderPosts(posts);
	} catch (error) {
		console.error("Error al obtener los posts:", error);
	}
}

/**
 * Crea un nuevo post enviándolo a la API.
 * @async
 * @function createNewPost
 * @param {string} title - Título del post.
 * @param {string} content - Contenido o cuerpo del post.
 */
async function createNewPost(title, content) {
	const newPostData = {
		title: title,
		body: content,
		userId: Math.random(),
	};

	try {
		await sendHTTPRequest("POST", API_URL, newPostData);
		console.log("Post creado exitosamente en el servidor.");
	} catch (error) {
		console.error("Error al crear el post:", error);
	}
}

/**
 * Inicializa los escuchadores de eventos de la aplicación.
 * @function initEventListeners
 */
function initEventListeners() {
	// Evento para cargar los posts al hacer clic en el botón
	DOM.fetchButton.addEventListener("click", fetchAndRenderPosts);

	// Evento para enviar el formulario y crear un post
	DOM.postForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const titleInput = event.currentTarget.querySelector("#title").value;
		const contentInput = event.currentTarget.querySelector("#content").value;

		createNewPost(titleInput, contentInput);
	});
}

// Inicializamos la app
initEventListeners();

/**
 * Escuchador de eventos para el contenedor de posts (Delegación de eventos).
 * Te servirá para detectar cuándo hacen clic en el botón "DELETE Content" de cualquier post.
 */
DOM.postListContainer.addEventListener("click", (event) => {
	if (event.target.tagName === "BUTTON") {
		const postId = event.target.closest("article").id;
		console.log(postId);
		sendHTTPRequest("DELETE", `${API_URL}/${postId}`);
	}
});
