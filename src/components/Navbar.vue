<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/',}">Page 1</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/page2',}">Page 2</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/page3',}">Page 3</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
