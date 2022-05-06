import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        flex: 0.15,
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
    leaveButton: {
        marginLeft: 35,
        height: 47,
        borderRadius: 5,
        backgroundColor: '#E10032',
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
        flex: 1,
    },
    flatList: {
        flexGrow: 0,
        width: 350
    },
    entityContainer: {
        margin: 10,
        //width: 250,
        backgroundColor: '#D4F1F4',
        borderRadius: 15,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        alignItems: 'center',
    },
    leaveEntityContainer: {
        margin: 10,
        width: 70,
        height: 75,
        backgroundColor: '#D01110',
        borderRadius: 10,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelEntityContainer: {
        margin: 10,
        width: 70,
        height: 75,
        backgroundColor: '#788eec',
        borderRadius: 10,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    entityText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        alignSelf: "center"
    },
    leaveEntityText: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: 'white',
        alignSelf: "center"
    },
    entityTextName: {
        fontSize: 18,
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
    entityButton: {
        color: '#D4F1F4'
    },
    header: {
        //backgroundColor: '#000C66',
        borderRadius: 5,
        //flex: 1,
        //height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    listHeader: {
        //backgroundColor: '#000C66',
        borderRadius: 5,
        //flex: 1,
        //height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        //marginBottom: 10
    },
    headerText: {
        color: '#000C66',
        fontSize: 18,
        fontWeight: 'bold'
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
        // margin: 2
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
})