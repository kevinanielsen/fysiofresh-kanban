import { createPinia, setActivePinia } from "pinia";
import TaskVue from "../Task.vue";
import { shallowMount } from "@vue/test-utils";

setActivePinia(createPinia());

describe("Task component", () => {
  it("can receive props", async () => {
    //Given a Task component
    //When component is mounted
    //Then the component mounts succesfully

    //Arrange & Act
    const wrapper = shallowMount(TaskVue, {
      props: {
        id: 0,
        title: "Do the dishes",
        description: "Clean the dishes",
      },
    });
    //Assert
    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "description": "Clean the dishes",
        "id": 0,
        "title": "Do the dishes",
      }
    `);
  });
  it("displays the task title", async () => {
    //Given a Task component
    //When component is mounted
    //Then the component mounts succesfully

    //Arrange & Act
    const wrapper = shallowMount(TaskVue, {
      props: {
        id: 0,
        title: "Do the dishes",
        description: "Clean the dishes",
      },
    });
    //Assert
    expect(wrapper.find("h4").text()).toMatchInlineSnapshot(`"Do the dishes"`);
  });

  it("displays the task description", async () => {
    //Given a Task component
    //When component is mounted
    //Then the component mounts succesfully

    //Arrange & Act
    const wrapper = shallowMount(TaskVue, {
      props: {
        id: 0,
        title: "Do the dishes",
        description: "Clean the dishes",
      },
    });
    //Assert
    expect(wrapper.find("p").text()).toMatchInlineSnapshot(
      `"Clean the dishes"`
    );
  });
});
