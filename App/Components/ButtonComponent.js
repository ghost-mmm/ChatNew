import Button, {Component} from 'react';
import { TouchableOpacity,Text, View, StyleSheeet } from 'react-native';

class ButtonComponent extends Component {
    render() {
        const {title, onPress} = this.props;
        return(
            <TouchableOpacity onPress={() => onPress()} style={styles.button}>
                <View style={styles.mainContainer}>
                    <Text style={styles.textStyle}>{title}</Text>
                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheeet.create({
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    mainContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        marginBottom:5,
        width: '85%',
        paddingHorizontal: 6,
        backgroundColor: '#ffd312',
        margin: 10
    },
    textStyle:{
        fontSize: 18,
        fontWeight: 'bold',
    }
});


export default ButtonComponent;