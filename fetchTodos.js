async function fetchUserTodos(){
    try{
        const [user,todos] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/todos')])
            const users = await user.json()
            const todo = await todos.json()
            
            const usersWithTodos = users.map(user => {
                const userTodos = todo.filter(todo => todo.userId === user.id);
                const arrId = userTodos.map(todo => todo.id)
                const arrCompleted = userTodos.map(todo => todo.completed)
                const todos = { arrId, arrCompleted}
                   console.log(todos)
                return {
                    id: user.id,
                    name: user.name,
                    todos: todos, 
                    
                    
                    
                }
            });
           
        // console.log(usersWithTodos)
    }
    catch(error){
        throw new Error('error occured!')
    }
}
fetchUserTodos()