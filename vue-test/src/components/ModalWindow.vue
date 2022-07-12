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
          <input type="text" v-model="name" change="targetName" />
          <input type="number" v-model="number" change="targetNumber" />
          <select>
            <option>{{ name }}</option>
          </select>
        </div>
      </div>
      <div class="modal-footer" name="footer">
        <button @click="saved">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      name: " ",
      number: " "
    };
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.number) {
      this.number = localStorage.number;
    }
  },
  watch: {
    names(newName) {
      localStorage.name = newName;
    },
    numbers(newNumber) {
      localStorage.number = newNumber;
    }
  },

  methods: {
    saved() {
      localStorage.name = this.name;
      localStorage.number = this.number;
      this.$emit("close");
      this.$emit("saved", [this.name], [this.number]);
    },
    targetName(event) {
      this.name = event.target.value;
    },
    targetNumber(event) {
      this.number = event.target.value;
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
