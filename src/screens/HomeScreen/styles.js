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
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
        flex: 1,
    },
    entityContainer: {
        marginTop: 16,
        backgroundColor: '#D4F1F4',
        borderRadius: 15,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        alignItems: 'center',
    },
    entityText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
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
})