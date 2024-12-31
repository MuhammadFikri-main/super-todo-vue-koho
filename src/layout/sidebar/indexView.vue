<!-- <template>
 
  <NavView  v-if="!sidebarIsVisible"
    @linkClicked="toggleSidebar" />

</template>
<script>
// import LogoView from './logoView.vue'

import NavView from './navMenu.vue';
export default {
components: { NavView  },
data() {
  return {
    sidebarIsVisible: false,
  };
},
methods: {
  toggleSidebar() {
    this.sidebarIsVisible = !this.sidebarIsVisible;
    document.getElementById("main").style.marginLeft = "0px";
  },
  closeSidebar() {
    this.sidebarIsVisible = true;
  },
},
}
</script> -->
<template>
  <div>
    <div class="logo-wrapper">
      <Logo />
      <div class="back-btn" @click="toggle_sidebar">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="toggle-sidebar" @click="toggle_sidebar">
        <vue-feather
          class="status_toggle middle"
          type="align-left"
          id="sidebar-toggle"
        ></vue-feather>
      </div>
    </div>
    <div class="logo-icon-wrapper">
      <router-link to="/">
        <img
          class="img-fluid"
          src="../../assets/images/logo/logo-icon.png"
          alt=""
      /></router-link>
    </div>
    <Nav />
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import Logo from './logoView.vue';
  import Nav from './navView.vue';

  export default {
  
    components: {
      Logo,
      Nav,
    },
    computed: {
      ...mapState({
        menuItems: (state) => state.menu.data,
        activeoverlay: (state) => state.menu.activeoverlay,
      }),
    },
    methods: {
      toggle_sidebar() {
        this.$store.dispatch('menu/opensidebar');
        this.$store.state.menu.activeoverlay = false;
      },
    },
  };
</script>

