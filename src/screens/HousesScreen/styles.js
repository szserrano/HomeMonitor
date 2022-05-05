import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    formContainer: {
        flexDirection: 'row',
        //height: 80,
        //marginTop: 40,
        //marginBottom: 20,
        //flex: 1,
        //paddingTop: 10,
        //paddingBottom: 10,
        //paddingLeft: 30,
        //paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#B1D8B7',
        paddingLeft: 16,
        paddingRight: 16,
        width: 250
        //flex: 1,
        //marginRight: 5
    },
    button: {
        margin: 10,
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    renameButton: {
        margin: 10,
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    removeButton: {
        margin: 10,
        height: 47,
        borderRadius: 5,
        backgroundColor: '#E10032',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    chatButton: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 300,
        alignItems: "center",
        justifyContent: 'center'
    },
    deleteButton: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#D01110',
        width: 300,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    flatList: {
        flexGrow: 0,
        width: 350
    },
    listContainer: {
        marginTop: 10,
        padding: 10,
        minHeight: 70
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
    noEntityContainer: {
        marginTop: 16,
        backgroundColor: '#CDD193',
        borderRadius: 2,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight: 5,
        alignItems: 'center',
    },
    entityText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#333333'
    },
    entityTextName: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#333333',
        alignSelf: "center"
    },
    entityTextID: {
        fontSize: 18,
        color: '#333333',
        alignSelf: "center"
    },
    houseIDText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#0A7029'
    },
    header: {
        //backgroundColor: '#000C66',
        borderRadius: 5,
        //flex: 1,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    headerText: {
        color: '#000C66',
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerView: {
        justifyContent: "center",
        alignItems: "center",
        // margin: 2
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
        // margin: 2
    },
    chatButtonView: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10
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