import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    fondo: {
        flex: 1,
        backgroundColor: '#000000',
        paddingHorizontal: 10,
       

    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        // backgroundColor: 'red',
        justifyContent:"flex-end"
    },
    resultado : {
        color: '#FAF3E3',
        fontSize: 65,
        textAlign: 'right'
    },
    smallResult: {
        color: 'rgba(250, 253, 227, 0.6)',
        fontSize: 35,
        textAlign: 'right'

    },
    row: { 
        // backgroundColor: 'orange',
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 10,

    },
    button: {
        height: 80,
        width: 80,
        backgroundColor:'#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 10,

        
    },
    buttonText: {
        color: 'white',
        textAlign:'center',
        padding: 10,
        fontSize: 35,
        fontWeight:'400',
        
    }

})
