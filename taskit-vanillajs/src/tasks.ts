const taskForm = document.querySelector<HTMLFormElement>('.form')
const formInput = document.querySelector<HTMLInputElement>('.form-input')
const list = document.querySelector<HTMLUListElement>('.list')
const clearBtn = document.querySelector<HTMLButtonElement>('.clear-btn')

type Task = {
    description: string;
    isCompleted: boolean;
}

let tasks: Task[] = loadTasks()

function loadTasks ():Task[] {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
}

tasks.forEach(renderTask)

taskForm?.addEventListener('submit', (e) => {
    e.preventDefault()

    const taskDescription = formInput?.value

    if (taskDescription) {
        console.log(taskDescription)

        const newTask: Task = {
            description: taskDescription,
            isCompleted: false
        }

        //add task
        addTask(newTask)
        //render task
        renderTask(newTask)
        //update localstorage
        updateStorage()
       
        formInput.value = ''
        return
    }
    alert('Input cannot be empty!')
})

const addTask = (task:Task):void => {
    tasks.push(task)
    console.log(tasks)
}

function renderTask (task:Task):void {
    const taskElement = document.createElement('li')
    taskElement.textContent = task.description

    //checkbox
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = task.isCompleted

    checkbox.addEventListener('change', () => {
        task.isCompleted = !task.isCompleted
        updateStorage()
    })

    taskElement.appendChild(checkbox)

    list?.appendChild(taskElement)
}

function updateStorage ():void {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function clearTasks():void {
    tasks = []
    list.innerHTML= ''
    localStorage.removeItem('tasks')
}

clearBtn?.addEventListener('click', () => {
    clearTasks()
    let loadedTasks = loadTasks()
    console.log(loadedTasks)
    loadedTasks.forEach(renderTask)
})