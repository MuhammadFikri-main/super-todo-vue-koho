<template>
  <nav class="sidebar-main">
    <div class="left-arrow" :class="isActive ? '' : 'disabled'" id="left-arrow" @click="display2()">
      <!-- <feather="arrow-left"></feather=> -->
      <vue-feather type="arrow-left"></vue-feather>
    </div>
    <div id="sidebar-menu" :style="{ marginLeft: this.sidebar == 'horizontal-wrapper' ? this.margin + 'px' : '0px' }">
      <ul class="sidebar-links custom-scrollbar" id="simple-bar">
        <li class="back-btn"><a href="index.html"><img class="img-fluid for-light"
              src="@/assets/images/logo/logo-icon.png" alt=""><img class="img-fluid for-dark"
              src="@/assets/images/logo/logo-icon-dark.png" alt=""></a>
          <div class="mobile-back text-end"><span>Back</span><i class="fa fa-angle-right ps-2" aria-hidden="true"></i>
          </div>
        </li>
        <li v-for="(menu, index) in menuItems" :key="index" class="sidebar-list">
          <!-- Sub -->
          <label :class="'badge badge-' + menu.badgeType" v-if="menu.badgeType">{{ menu.badgeValue }}</label>
          <a href="javascript:void(0)" :class="{ active: menu.active }" class="sidebar-link sidebar-title"
            v-if="menu.type == 'sub'" @click="setNavActive(menu, index)">
            <vue-feather :type="menu.icon" class="top"></vue-feather>
            <span>
              {{ menu.title }}
            </span>
            <div class="according-menu" v-if="menu.children">
              <i class="pull-right" :class="[menu.active ? 'fa fa-angle-down' : 'fa fa-angle-right']"></i>
            </div>
          </a>
          <!-- Link -->
          <router-link :to="menu.path" class="sidebar-link sidebar-title" v-if="menu.type == 'link'"
            router-link-exact-active exact v-on:click="hidesecondmenu()">
            <vue-feather :type="menu.icon" class="top"></vue-feather>
            <span>
              {{ menu.title }}
            </span>
            <div class="according-menu">
              <i class="pull-right" :class="[menu.active ? 'fa fa-angle-right' : 'fa fa-angle-down']"></i>
            </div>
          </router-link>
          <a :href="menu.path" class="sidebar-link sidebar-title" target="_blank" v-else>
            <vue-feather :type="menu.icon" class="home"></vue-feather>
            <span class="menu1">
              {{ menu.title }}
            </span>
            <div class="according-menu">
              <i class="pull-right" :class="[menu.active ? 'fa fa-angle-down' : 'fa fa-angle-right']"></i>
            </div>
          </a>
          <!-- External Link -->
          <a :href="menu.path" class="sidebar-link sidebar-title" v-if="menu.type == 'extLink'"
            @click="setNavActive(menuItem, index)">
            <feather :type="menu.icon" class="top"></feather>
            <span>
              {{ menu.title }}
            </span>
            <i class="fa fa-angle-right pull-right" v-if="menu.children"></i>
          </a>
        </li>

      </ul>
      <div class="sidebar-img-section">
        <div class="sidebar-img-content"><img class="img-fluid" src="@/assets/images/dashboard/upgrade/2.png" alt="">
          <h4>Experiance with more Features</h4><a class="btn btn-primary"
            href="https://themeforest.net/user/pixelstrap/portfolio" target="_blank">Check now</a>
        </div>
      </div>
    </div>
    <div class="right-arrow" id="right-arrow" @click="display()"><vue-feather type="arrow-right"></vue-feather></div>
  </nav>
</template>

<script>
import navMenu from "@/mixins/navMenu"

export default {
  name: "navMenu",
  mixins: [navMenu],

}
</script>
