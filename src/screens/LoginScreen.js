import { Input, NativeBaseProvider, Icon, Text, View, Button } from 'native-base'
import React, { useState } from 'react'
import { MaterialIcons, AntDesign } from "@expo/vector-icons"
import { Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Formik } from 'formik';
import * as yup from 'yup';
import Welcome from '../components/login/Welcome'
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

    const navegation = useNavigation()

    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Por favor introduzca un email válido")
            .required('Se requiere email'),
        password: yup
            .string()
            .required('Se requiere contraseña'),
    })

    return (
        <NativeBaseProvider>
            <ScrollView>
                <View style={styles.container} >
                    <Welcome />
                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{ email: '', password: '' }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, isValid, errors }) => (

                            <View style={{ height: 250, marginTop: 25, justifyContent: 'space-around' }} >
                                <Input
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType='email-address'
                                    size="2xl"
                                    variant="rounded"
                                    mx="3"
                                    space={4}
                                    placeholder="Correo"
                                    w={{
                                        base: "80%",
                                        md: "25%",
                                    }}
                                    InputLeftElement={
                                        <Icon
                                            as={<MaterialIcons name="person" />}
                                            size={5}
                                            ml="2"
                                            color="muted.400"
                                        />
                                    }
                                />
                                {errors.email &&
                                    <Text style={{ marginLeft: 15, fontSize: 10, color: 'red' }}>{errors.email}</Text>
                                }
                                <Input
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    type='password'
                                    size="2xl"
                                    variant="rounded"
                                    mx="3"
                                    placeholder="contraseña"
                                    w={{
                                        base: "80%",
                                        md: "25%",
                                    }}
                                    InputLeftElement={
                                        <Icon
                                            as={<MaterialIcons name="lock" />}
                                            size={5}
                                            ml="2"
                                            color="muted.400"
                                        />
                                    }
                                />
                                {errors.password &&
                                    <Text style={{ marginLeft: 15, fontSize: 10, color: 'red' }}>{errors.password}</Text>
                                }

                                <View style={{ alignItems: 'center' }} >
                                    <Button
                                        disabled={!isValid}
                                        onPress={handleSubmit}
                                        width={'90%'}
                                        height={50}
                                        leftIcon={<AntDesign name="arrowright" size={30} color="white" />}
                                        colorScheme="blue"
                                    >
                                    </Button>
                                </View>

                            </View>

                        )}
                    </Formik>


                    <Text>O inicia con... </Text>

                    <View style={styles.socialContainer} >
                        <TouchableOpacity>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('../assets/icons/facebook.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('../assets/icons/google.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text>¿Aun no tiene una cuenta?
                        <Text
                            style={{ color: 'blue' }}
                            onPress={() => navegation.navigate('RegisterScreen')}
                        > Registrarse
                        </Text>
                    </Text>

                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    socialContainer: {
        flex: 1,
        marginTop: 10,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})
