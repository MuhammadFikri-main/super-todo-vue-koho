<template>
    <footer class="footer" :class="this.footer=='footer-dark'?'footer-dark':''">
        <div class="container-fluid">
          <div class="row">
            <div class="col-10 p-0 footer-left">
              <p class="mb-0">Copyright 2023 © Koho theme by pixelstrap</p>
            </div>
            <div class="col-2 p-0 footer-right"><i class="fa fa-heart font-danger"></i></div>
          </div>
        </div>
      </footer>
</template>
<script>
import { mapGetters } from 'vuex'
    export default{
        name:"footerView",
        computed:{
          ...mapGetters({
            footer: 'layout/footer'
          })
        }
    }
</script>