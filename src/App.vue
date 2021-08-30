<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Accueil</router-link>
        </li>
           <li class="nav-item">
          <router-link to="/quoi" class="nav-link">C'est quoi?</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/qui" class="nav-link">C'est pour qui?</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">A propos</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  <router-view/>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle'
export default {
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #F2BA52;
}

#nav a.router-link-exact-active {
  color: #D97904;
}

#nav a:hover {
  color: #D97904;
}

</style>
