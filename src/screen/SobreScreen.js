import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class SobreScreen extends Component {
    // configurando opções de navegação
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: 'Sobre',
        tabBarIcon: ({ focused, tintColor }) => {
            if (focused) {
                return (
                    <Image source={require('../img/cadastrar_ativo.png')}
                        style={{ width: 26, height: 26 }} />
                );
            } else {
                return (
                    <Image source={require('../img/cadastrar_inativo.png')}
                        style={{ width: 26, height: 26 }} />
                );
            }
        }
    });

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.allViews}>
                        <View style={styles.textoView}>
                            <Text style={styles.texto}>React-Native</Text>
                        </View>
                        <View style={styles.textoView}>
                            <Text style={styles.texto}> React Native é um framework, criado pela equipe do Facebook, baseado no React, para desenvolvimento mobile multi-plataforma (Android/ios). </Text>
                        </View>
                        <View style={styles.textoView}>
                            <Text style={styles.texto}>Paulo</Text>
                        </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    allViews: {
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    textoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingLeft: 10,
        paddingBottom: 20
    },
    texto: {
        fontSize: 23,
        color: '#000000',
        fontWeight: 'bold'
    }
});