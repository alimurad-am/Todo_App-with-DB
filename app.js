// https://gdetihdtjrfwwiqexrbr.supabase.co

// sb_publishable_ldGGLgKuDeni7VjQWktWnQ_eCkHZYi2

let userInput = document.querySelector("#userInput");
let ul = document.querySelector("#ul");

let supabaseClient = supabase.createClient(
   "https://gdetihdtjrfwwiqexrbr.supabase.co", 
    "sb_publishable_ldGGLgKuDeni7VjQWktWnQ_eCkHZYi2"
)

const addTask = async(event) => {

    event.preventDefault();

    let inputValue = userInput.value;
    await supabaseClient.from("Todos").insert({Todo: inputValue})
   showTask()
}



const showTask = async() => {
    ul.innerHTML = "";

    const response = await supabaseClient.from("Todos").select("*")
    const Todos = response.data
    for(let i = 0; i < Todos.length; i++){
   ul.innerHTML += `<li> ${Todos[i].Todo} <button onclick = "deleteTodo(${Todos[i].id})"> ❌ </button></li>`
   }
   console.log(Todos)

}
showTask();

let deleteTodo = async(id) =>{
  const deletTask =  await supabaseClient.from("Todos").delete().eq("id", id)
  showTask()
}


// let supabase = (async() =>{

// })


// userInput.addEventListener("onsubmit", addTask)