import Vue from 'vue';
import Vuetify, {
    VApp,
    VAppBar,
    VToolbarItems,
    VFooter,
    VNavigationDrawer,

    VContainer,
    VContent,
    VLayout,
    VRow,
    VCol,

    VBtn,
    VSubheader,
    VDivider,
    VImg,
    VAvatar,

    VIcon,
    VAppBarNavIcon,

    VSystemBar,
    VToolbar,

    VChip,
    VChipGroup,

    VCard,
    VCardTitle,
    VCardText,
    VCarousel,
    VCarouselItem,
    VSheet,

    VList,
    VListItem,
    VListItemAvatar,
    VListItemTitle,
    VListItemAction,
    VListItemActionText,
    VListItemContent,
    VListItemSubtitle,

    VTextField,

} from 'vuetify/lib';

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(Vuetify, {
    components: {
        VApp,
        VAppBar,
        VToolbarItems,
        VFooter,
        VNavigationDrawer,

        VContainer,
        VContent,
        VLayout,
        VRow,
        VCol,

        VBtn,
        VSubheader,
        VDivider,
        VImg,
        VAvatar,

        VIcon,
        VAppBarNavIcon,

        VSystemBar,
        VToolbar,

        VChip,
        VChipGroup,

        VCard,
        VCardTitle,
        VCardText,
        VCarousel,
        VCarouselItem,
        VSheet,

        VList,
        VListItem,
        VListItemAvatar,
        VListItemTitle,
        VListItemAction,
        VListItemActionText,
        VListItemContent,
        VListItemSubtitle,

        VTextField,
    }
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
