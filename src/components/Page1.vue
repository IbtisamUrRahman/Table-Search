<template>
  <div class="container">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Search in Table" v-model="searchTerm">
    </div>
    <Table :rows="searchFilter"/>
  </div>
</template>
 <script>
import axios from "axios";
import Table from "./Table";
export default {
  data() {
    return {
      tableData: [],
      searchTerm: ""
    };
  },
  computed: {
    searchFilter: function() {
      return this.tableData.filter(row => {
        return (
          row.first_name.includes(this.searchTerm) ||
          row.last_name.includes(this.searchTerm) ||
          row.email.includes(this.searchTerm)
        );
      });
    }
  },
  components: {
    Table
  },
  created() {
    axios.get("https://reqres.in/api/users").then(response => {
      this.tableData = response.data.data;
    });
  }
};
</script> 