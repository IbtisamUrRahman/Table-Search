export default {
  computed: {
    searchFilter: function() {
      console.log("filter");
      return this.tableData.filter(row => {
        return (
          row.first_name.includes(this.searchTerm) ||
          row.last_name.includes(this.searchTerm) ||
          row.email.includes(this.searchTerm)
        );
      });
    }
  }
};
