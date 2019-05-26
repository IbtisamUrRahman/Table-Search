<template>
  <div class="container">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Search in Table" v-model="searchTerm">
    </div>
    <div class="row">
      <div class="col-md-6">
        <Table title="Table1" :rows="searchFilter"/>
      </div>
      <div class="col-md-6">
        <Table title="Table2" :rows="searchFilter"/>
      </div>
    </div>
  </div>
</template>
 <script>
import axios from "axios";
import Table from "./Table";
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      tableData: [],
      searchTerm: ""
    };
  },
  components: {
    Table
  },
  mixins: [searchMixin],
  created() {
    axios.get("https://reqres.in/api/users").then(response => {
      this.tableData = response.data.data;
    });
  }
};
</script> 