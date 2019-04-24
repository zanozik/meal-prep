<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
        <snack-bar></snack-bar>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import SnackBar from './components/SnackBar';
export default {
    name: 'App',
    components: {
        SnackBar,
        AppNavigation
    }
};
</script>

<style>
a {
    color: white !important;
    text-decoration: none;
}
</style>
