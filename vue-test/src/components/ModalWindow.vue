<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-header" name="header">
        Добавление пользователя
      </div>
      <div class="modal-body" name="body">
        <div class="body-part">
          <div>Имя</div>
          <div>Телефон</div>
          <div>Начальник</div>
        </div>

        <div class="body-part">
          <input
            type="text"
            @click="hideText"
            v-bind:value="names"
            @input="names = $event.target.value"
          />
          <input
            type="number"
            @click="hideText"
            v-bind:value="numbers"
            @input="numbers = $event.target.value"
          />
          <select>
            <option>Родитель динамично</option>
          </select>
        </div>
      </div>
      <div class="modal-footer" name="footer">
        <button @click="close">Сохранить</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      names: "",
      numbers: ""
    };
  },
  mounted() {
    if (localStorage.names) {
      this.names = localStorage.names;
    }
    if (localStorage.numbers) {
      this.numbers = localStorage.numbers;
    }
  },
  methods: {
    close() {
      localStorage.names = this.names;
      localStorage.numbers = this.numbers;
      this.$emit("close");
    },
    hideText() {
      this.names = "";
      this.nambers = "";
    }
  }
};
</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 0 0 30px;
  width: 350px;
  height: 300px;
}

.modal-header,
.modal-footer {
  display: flex;
  justify-content: center;
}
.modal-header {
  justify-content: center;
}

.modal-footer {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal-footer button {
  height: 30px;
  width: 100px;
  border-radius: 17px;
}

.modal-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50%;
}
.body-part {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 10px 0 0;
}
</style>
