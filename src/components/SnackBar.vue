<template>
    <v-snackbar top v-model="visible" :timeout="timeout" :multi-line="multiline" :color="color">
        {{ text }}
    </v-snackbar>
</template>

<script>
export default {
    name: 'SnackBar',
    data() {
        return {
            visible: false,
            timeout: 5000,
            multiline: false,
            color: 'error',
            text: ''
        };
    }
};
</script>
