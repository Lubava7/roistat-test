<template>
  <div class="hello">
    <div class="table_button">
      <button class="add_button" @click="showModal" type="button">
        Добавить
      </button>
      <div class="table">
        <div class="name_column">
          <div class="name">Имя</div>
          <div class="dinamic-name">
            {{ name }}
          </div>
        </div>
        <div class="number_column">
          <div class="phone_number">Телефон</div>
          <div class="dinamic-number">
            {{ number }}
          </div>
        </div>
      </div>
    </div>
    <ModalWindow
      v-on:saved="onSaved"
      v-bind:name="name"
      v-bind:number="number"
      @close="closeModal"
      v-show="isModalVisible"
    />
  </div>
</template>

<script>
import ModalWindow from "./ModalWindow.vue";
export default {
  name: "TableForm",
  data() {
    return {
      isModalVisible: false,
      name: " ",
      number: " "
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    onSaved(name, number) {
      this.name = name;
      this.number = number;
      console.log("onSaved", name, number);
    }
  },
  components: {
    ModalWindow
  }
};
</script>

<style scoped>
.hello {
  display: flex;
  flex-direction: row;
}
.table_button {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.table {
  width: 400px;
  display: flex;
  flex-direction: row;
}
.name_column {
  border: 2px solid black;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.name {
  border-bottom: 0.5px solid black;
  width: 148px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3px 3px 3px 10px;
}
.number_column {
  border: 2px solid black;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.phone_number {
  border-bottom: 0.5px solid black;
  width: 229px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3px 3px 3px 10px;
}
.dinamic-name {
  border-bottom: 0.5px solid black;
  display: flex;
  height: 100%;
  width: 97%;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 115px 10px 10px;
}
.dinamic-number {
  border-bottom: 0.5px solid black;
  height: 100%;
  width: 97%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0 10px 10px;
}
.add_button {
  border-radius: 17px;
  height: 30px;
  width: 100px;
  font-size: 17px;
  margin: 10px;
}
</style>
