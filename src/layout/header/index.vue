<template>
  <!-- <div class="page-header"> -->
  <div class="header-wrapper row m-0">

    <form class="form-inline search-full col">
      <div class="form-group w-100">
        <div class="Typeahead Typeahead--twitterUsers">
          <div class="u-posRelative">
            <input class="demo-input Typeahead-input form-control-plaintext w-100" type="text"
              placeholder="Search Koho .." name="q" title="" autofocus>
            <div class="spinner-border Typeahead-spinner" role="status"><span class="sr-only">Loading...</span></div><i
              class="close-search" data-feather="x"></i>
          </div>
          <div class="Typeahead-menu"></div>
        </div>
      </div>
    </form>

    <logoPage />
    <searchPage />

    <div class="nav-right col-6 pull-right right-header p-0">
      <ul class="nav-menus">

        <iconPage />
        <li class="profile-nav onhover-dropdown p-0 me-0">
          <div class="d-flex profile-media"><img class="b-r-50" src="@/assets/images/dashboard/profile.png" alt="">
            <div class="flex-grow-1"><span>Helen Walter</span>
              <p class="mb-0 font-roboto">Admin <i class="middle fa fa-angle-down"></i></p>
            </div>
          </div>
          <ul class="profile-dropdown onhover-show-div">
            <li><vue-feather type="user"></vue-feather><span>Account
              </span></li>
            <li><vue-feather type="mail"></vue-feather><span>Inbox</span>
            </li>
            <li><vue-feather type="file-text"></vue-feather><span>Taskboard</span></li>
            <li><a><vue-feather type="log-in"></vue-feather><span>Log
                  in</span></a></li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>

import logoPage from '../header/logoPage.vue'
import searchPage from '../header/searchPage.vue'
import iconPage from '../header/iconPage.vue'

export default {
  name: 'headerView',
  data() { return { active: false } },
  components: {
    logoPage, searchPage, iconPage
  }, methods: {
  },
}
</script>
