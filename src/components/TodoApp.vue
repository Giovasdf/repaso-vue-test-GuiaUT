<template>
    <div>
        <h1>{{ title }}</h1> <!-- Cambiado para usar la prop -->
        <div>
            <li v-for="todo in todoList" :key="todo.id" data-test="tarea" :class="[todo.completed ? 'completed' : '']">
                {{ todo.description }}
                <input type="checkbox" v-model="todo.completed" data-test="checkbox">
            </li>
        </div>
        <form data-test="form" @submit.prevent="crearTarea">
            <input data-test="nueva-tarea" v-model="nuevaTarea">
        </form>
    </div>
</template>

<script>
export default {
    name: 'TodoApp',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            nuevaTarea: '',
            todoList: [
                { id: 1, description: 'Description toDo 1', completed: false }
            ]
        }
    },
    methods: {
        crearTarea() {
            this.todoList.push({
                id: 2,
                description: this.nuevaTarea,
                completed: false
            });
            this.nuevaTarea = ''; // Opcional: limpiar el campo de entrada después de agregar
        }
    }
}
</script>

<style>
.completed {
    text-decoration: line-through;
}
</style>
