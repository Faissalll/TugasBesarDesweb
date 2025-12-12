import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Destinasi from "../views/Destinasi.vue";
import Wahana from "../views/Wahana.vue";
import Tentang from "../views/Tentang.vue";
import Kontak from "../views/Kontak.vue";
import AboutMe from "../views/AboutMe.vue";

import DestinasiDetail from "../views/DestinasiDetail.vue";
import WahanaDetail from "../views/WahanaDetail.vue";
import PesanTiket from "../views/PesanTiket.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/destinasi",
        name: "Destinasi",
        component: Destinasi,
    },
    {
        path: "/wahana",
        name: "Wahana",
        component: Wahana,
    },
    {
        path: "/tentang",
        name: "Tentang",
        component: Tentang,
    },
    {
        path: "/kontak",
        name: "Kontak",
        component: Kontak,
    },


    {
        path: "/destinasi/:id",
        name: "DestinasiDetail",
        component: DestinasiDetail,
    },
    {
        path: "/wahana/:id",
        name: "WahanaDetail",
        component: WahanaDetail,
    },
    {
        path: "/pesan-tiket",
        name: "PesanTiket",
        component: PesanTiket,
    },
    {
        path: "/AboutMe",
        name: "AboutMe",
        component: AboutMe
    }    
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        return { top: 0 };
    },
});

export default router;
