
import {
    mapState, mapGetters
  } from 'vuex'
 
  export default {
    name: "navMenu",
   
    data() {
      return {
        isActive: false,
        layoutType: 'ltr',
        mixLayout: 'default',
        margin: 0,
      
      }
    },
    computed: {
      ...mapState({
        isActive: state => state.isActive,
        menuItems: state => state.menu.data,
        activeoverlay: (state) => state.menu.activeoverlay,
        togglesidebar: (state) => state.menu.togglesidebar,
        width: (state) => state.menu.width,
        height: (state) => state.menu.height,
        margin: (state) => state.menu.margin,
        menuWidth: (state) => state.menu.menuWidth,
        layout: state => state.layout.layout,
        sidebar: state => state.layout.sidebarType,
      }),
      ...mapGetters({
        sidebar: 'layout/sidebar'
      }),
    },
    watch: {
      menutItems(menu) {
        console.log('changed Menu items:', menu)
      }
    },
    methods: {
      display() {
  
        if (this.isActive == false) {
          this.isActive = !this.isActive
        }
        console.log("data", this.footer)
        if (this.margin >= -4500 && this.sidebar == "horizontal-wrapper") {
          this.margin = this.margin - 500
  
        }
      },
      display2() {
        if (this.margin <= 500)
          this.margin = this.margin + 500
      },
      customizeLayoutType(val) {
        this.$store.dispatch('layout/setLayoutType', val);
        this.layoutType = val;
      },
      customizeMixLayout(val) {
        this.mixLayout = val;
        this.$store.dispatch('layout/setLayout', val);
      },
      setNavActive(item) {
        this.$store.dispatch('menu/setNavActive', item);
  
      },
      hidesecondmenu() {
        if (window.innerWidth < 991) {
          this.$store.state.menu.activeoverlay = false,
            this.$store.state.menu.togglesidebar = false;
          this.menuItems.filter(menuItem => {
            menuItem.active = false;
          });
         
        }
      },
     
    },
    mounted() {
      this.menuItems.filter(items => {
        if (items.path === this.$route.path)
          this.$store.dispatch('menu/setActiveRoute', items);
        if (!items.children) return false;
        items.children.filter(subItems => {
          if (subItems.path === this.$route.path)
            this.$store.dispatch('menu/setActiveRoute', subItems);
          if (!subItems.children) return false;
          subItems.children.filter(subSubItems => {
            if (subSubItems.path === this.$route.path)
              this.$store.dispatch('menu/setActiveRoute', subSubItems);
          });
        });
      });
    }
  }