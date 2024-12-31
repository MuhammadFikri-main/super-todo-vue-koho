<template>
  <li>
    <modePage />
  </li>
  <li class="onhover-dropdown">
    <div class="notification-box"><vue-feather type="star"></vue-feather></div>

    <flipBookmark />
  </li>
  <li class="onhover-dropdown">
    <div class="notification-box"><vue-feather type="bell"></vue-feather><span
        class="badge rounded-pill badge-primary">4</span></div>
    <ul class="notification-dropdown onhover-show-div">
      <li><vue-feather type="bell" class="d-block"></vue-feather>
        <h3 class="mb-0">Notifications</h3>
      </li>
      <li>
        <p><i class="fa fa-circle-o me-3 font-primary"> </i>Delivery processing <span class="pull-right">10 min.</span>
        </p>
      </li>
      <li>
        <p><i class="fa fa-circle-o me-3 font-success"></i>Order Complete<span class="pull-right">1 hr</span></p>
      </li>
      <li>
        <p><i class="fa fa-circle-o me-3 font-info"></i>Tickets Generated<span class="pull-right">3 hr</span></p>
      </li>
      <li>
        <p><i class="fa fa-circle-o me-3 font-danger"></i>Delivery Complete<span class="pull-right">6 hr</span></p>
      </li>
      <li><a class="btn btn-primary">Check all notification</a></li>
    </ul>
  </li>
  <li class="onhover-dropdown"><vue-feather type="message-square"></vue-feather>
    <ul class="chat-dropdown onhover-show-div">
      <li><vue-feather type="message-square" class="d-block"></vue-feather>
        <h3 class="mb-0">Message Box</h3>
      </li>
      <li>
        <div class="d-flex"><img class="img-fluid rounded-circle me-3" src="@/assets/images/user/6.jpg" alt="">
          <div class="status-circle online"></div>
          <div class="flex-grow-1"><span>Ain Chavez</span>
            <p>Do you want to go see movie?</p>
          </div>
          <p class="f-12 font-success">2 mins ago</p>
        </div>
      </li>
      <li>
        <div class="d-flex"><img class="img-fluid rounded-circle me-3" src="@/assets/images/user/1.jpg" alt="">
          <div class="status-circle online"></div>
          <div class="flex-grow-1"><span>Erica Hughes</span>
            <p>Thank you for rating us.</p>
          </div>
          <p class="f-12 font-success">5 mins ago</p>
        </div>
      </li>
      <li>
        <div class="d-flex"><img class="img-fluid rounded-circle me-3" src="@/assets/images/user/7.jpg" alt="">
          <div class="status-circle offline"></div>
          <div class="flex-grow-1"><span>Kori Thomas</span>
            <p>What`s the project report update?</p>
          </div>
          <p class="f-12 font-danger">9 mins ago</p>
        </div>
      </li>
      <li class="text-center"><a class="btn btn-primary"> View All</a></li>
    </ul>
  </li>
  <!-- <li class="maximize"><a class="text-dark" href="#!" onclick="javascript:toggleFullScreen()"><vue-feather type="maximize"></vue-feather></a></li> -->
  <maxiMize />
</template>
<script>
import flipBookmark from './flipBookmark.vue';
import maxiMize from './maxiMize.vue';
import modePage from './modePage.vue'
export default {
  name: "iconPage",
  components: { flipBookmark, maxiMize, modePage }
}
</script>