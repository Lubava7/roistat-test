import Vue from "vue";
import Router from "vue-router";
import TableForm from "../components/TableForm.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "TableForm",
      component: TableForm
    }
  ]
});
