<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                prepend-icon="mdi-account"
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                v-on:keydown="clearErrors('email')"
                                :rules="emailRules"
                                :error-messages="errors.email"
                                required
                            ></v-text-field>
                            <v-text-field
                                id="password"
                                name="password"
                                label="Password"
                                prepend-icon="mdi-lock"
                                type="password"
                                v-model="password"
                                v-on:keydown="clearErrors('password')"
                                :rules="passwordRules"
                                :error-messages="errors.password"
                                required
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" :disabled="!valid" @click="submit">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <v-snackbar top color="error" v-model="snackbar.visible">{{ snackbar.text }}</v-snackbar>
    </v-container>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            snackbar: {
                visible: false,
                text: ''
            },
            errors: {
            }
        };
    },
    computed: {
        emailRules() {
            return [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]
        },
        passwordRules() {
            return [
                v => !!v || 'Password is required',
                v => v.length > 6 || 'Password must be grater than 6 characters'
            ]
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$auth
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then(user => {
                        this.$store.commit('setUser', user);
                        this.$store.commit('setIsAuthenticated', true);
                        this.$router.push('/');
                    })
                    .catch(error => {
                        this.$store.commit('setUser', null);
                        this.$store.commit('setIsAuthenticated', false);
                        this.snackbar.text = error.message;
                        this.snackbar.visible = true;
                        //this.errors['password'] = error.message;

                        var field = null;
                        switch (error.code) {
                            case 'auth/wrong-password':
                                field = 'password';
                                break;
                            case 'auth/user-not-found':
                                field = 'email';
                                break;
                        }
                        this.errors[field] = error.message;
                    });
            }
        },
        clearErrors(field) {
            if (field) {
                if (this.errors[field]) {
                    delete this.errors[field];
                }
            } else {
                this.errors = {};
            }
        }
    }
};
</script>

<style scoped></style>
