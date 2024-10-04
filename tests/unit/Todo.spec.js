// Importamos la función shallowMount de Vue Test Utils, que se utiliza para montar componentes de Vue para realizar pruebas.
import { shallowMount } from "@vue/test-utils";

// Importamos el componente TodoApp que vamos a probar.
import TodoApp from "@/components/TodoApp";

// Describimos un bloque de pruebas para el componente TodoApp.
describe("TodoApp.vue", () => {
    
    // Test 1: Comprobamos que se puede agregar una nueva tarea.
    test("Deberá agregar una nueva tarea", async () => {
        // Montamos el componente TodoApp en un wrapper.
        const wrapper = shallowMount(TodoApp);
        
        // Verificamos que inicialmente hay una tarea en la lista.
        expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(1);

        // Establecemos el valor del input donde se escribe la nueva tarea.
        await wrapper.get('[data-test="nueva-tarea"]').setValue("Nueva tarea");
        
        // Disparamos el evento de submit del formulario para agregar la nueva tarea.
        await wrapper.get('[data-test="form"]').trigger("submit");
        
        // Verificamos que después de agregar la nueva tarea, ahora hay dos tareas en la lista.
        expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(2);
    });

    // Test 2: Comprobamos que se puede marcar una tarea como completada.
    test("Se deberá marcar como tarea completada", async () => {
        // Montamos el componente TodoApp.
        const wrapper = shallowMount(TodoApp);
        
        // Simulamos el cambio de un checkbox a "true", marcando la tarea como completada.
        await wrapper.get('[data-test="checkbox"]').setValue(true);
        
        // Verificamos que la clase 'completed' ha sido añadida al elemento de la tarea.
        expect(wrapper.get('[data-test="tarea"]').classes()).toContain("completed");
    });

    // Test 3: Verificamos que el texto del h1 se envía correctamente mediante props.
    test("El texto del h1 debe ser enviado mediante props", () => {
        // Definimos un título que queremos enviar como prop.
        const title = "Lista de Tareas";
        
        // Montamos el componente TodoApp con la prop 'title'.
        const wrapper = shallowMount(TodoApp, {
            props: { title }
        });
        
        // Verificamos que el texto dentro del h1 del componente sea igual al título que se envió como prop.
        expect(wrapper.find('h1').text()).toBe(title); 
    });
});
