import { shallowMount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp";

describe("TodoApp.vue", () => {
    test("Deberá agregar una nueva tarea", async () => {
        const wrapper = shallowMount(TodoApp);
        expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(1);

        await wrapper.get('[data-test="nueva-tarea"]').setValue("Nueva tarea");
        await wrapper.get('[data-test="form"]').trigger("submit");
        expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(2);
    });

    test("Se deberá marcar como tarea completada", async () => {
        const wrapper = shallowMount(TodoApp);
        await wrapper.get('[data-test="checkbox"]').setValue(true);
        expect(wrapper.get('[data-test="tarea"]').classes()).toContain("completed");
    });

    test("El texto del h1 debe ser enviado mediante props", () => {
        const title = "Lista de Tareas";
        const wrapper = shallowMount(TodoApp, {
            props: { title }
        });
        expect(wrapper.find('h1').text()).toBe(title); 
    });
});
