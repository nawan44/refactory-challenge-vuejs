<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark">
      <b-navbar-brand class="navbar-brand" href="#"
        ><h5>Cafe Bang Mul</h5>
      </b-navbar-brand>

      <b-navbar-toggle class="toggle" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="navbar-nav">
          <b-nav-item class="nav-item" href="/home">
            <ul>
              <li><a href="/login">All</a></li>
              <li><a href="/teh">Teh</a></li>
              <li><a href="/kopi">Kopi</a></li>
              <li><a href="#">Juice</a></li>
              <li><a href="#">Snack</a></li>
            </ul>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item class="nav-admin" href="#"
            ><h6>Hello, Admin</h6></b-nav-item
          >
          <b-nav-item class="nav-logout" href="#"
            ><h6>
              <router-link class="router-link" to="/login">Logout</router-link>
            </h6></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style>
.navbar {
  background-color: #3c366b;
  /* padding: 0 20px; */
}
.navbar-brand h5 {
  height: 50px;
  padding: 10px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.toggle {
  width: 40px;
  padding: 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.router-link {
  padding: 0;
  margin: 0;
  color: #38b6bb;
  text-decoration: none;
}
.router-link:hover {
  padding: 0;
  margin: 0;
  color: #fff;
  text-decoration: none;
}
.nav-item ul li {
  display: inline;
  float: left;
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
  margin: 10px 15px;
}
li a {
  display: block;
  padding: 5px 15px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
}
.nav-item ul li a:hover {
  color: #38b6bb;
  background-color: #fff;
  text-decoration: none;
}
.navbar-nav {
  color: transparent;
}
.nav-admin h6 {
  text-align: left;
  color: #fff;
  padding: 5px 0;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
}

.nav-logout h6 {
  color: #38b6bb;
  text-align: left;
  padding: 5px 0;
  font-size: 16x;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
}
.nav-logout h6:hover {
  color: #fff;
}
</style>
