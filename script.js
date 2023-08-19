const localStorageKey = ''

function newTask ()
{
    let input = document.getElementById('input-new-task')

    //Validation

    if(!input.value) //Verifica se possui algo escrito para que seja adicionado na lista. Se não tiver nenhum valor, exibirá uma mensagem de alerta para inserir o texto antes.
    {

        alert('Digite algo para inserir')

    } 
    
    else{
        //Increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

        values.push({
            name:input.value
        })

        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showValues()
    }
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    
    let list = document.getElementById('to-do-list')

    //zerando dados no HTML
    list.innerHTML = ''

    }

    //laços de repetição
    for(let i = 0; i <values.length; i++)
    {
        list.innerHTML += `<li> ${values[i]['name']} </li>`
    }
}

    showValues()