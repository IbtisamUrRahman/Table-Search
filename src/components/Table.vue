<template>
  <div>
    <h1>{{title}}</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Email</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <th scope="row">{{row.id}}</th>
          <td>{{row.email}}</td>
          <td>{{row.first_name}}</td>
          <td>{{row.last_name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>;
<script>
export default {
  props: ["rows", "title"]
};
</script>

