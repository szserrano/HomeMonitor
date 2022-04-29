import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        backgroundColor: '#D1E2C4',
        borderRadius: 25,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        alignItems: 'center',
    },
    entityText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#333333'
    },
    header: {
        //backgroundColor: '#000C66',
        borderRadius: 5,
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    headerText: {
        color: '#000C66',
        fontSize: 18,
        fontWeight: 'bold'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    pressableButton: { // pressable button
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    pressableButtonOpen: {
        backgroundColor: "#F194FF", // hot pink
    },
    pressableButtonClose: {
        backgroundColor: "#2196F3", // google blue
    },
    pressableTextStyle: { // Text in pink
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
})