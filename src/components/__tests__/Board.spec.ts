import Board from "@/components/Board.vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";

setActivePinia(createPinia());

describe("Board component", () => {
  it("should mount service display", async () => {
    //Given a ServiceDisplayModal
    //When component is mounted
    //Then the component mounts succesfully

    //Arrange & Act
    const wrapper = mount(Board, {});
    //Assert
    expect(wrapper);
  });
});
