import React,{Component, useState} from 'react';
import {View} from 'react-native';
import  TextInputComponent from '../Components/TextInputComponent';
import ButtonComponent from '../Components/ButtonComponent';

const Login =(): JSX.Element=> {
    const [email,setEmail] = useState(null);
    return(
        <View style={{flex: 1, backgroundColor: '#000', justifyContent: 'center',alignItems: 'center'}}>
            <TextInputComponent placeholder="Enter email" updateFields={(text: any)=> setEmail(text)}></TextInputComponent>
            <ButtonComponent title="Login" onPress={()=>{}}></ButtonComponent>
        </View>
    )

}

export default Login;