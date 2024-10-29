import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 100,
        backgroundColor: '#fff',
        position: 'relative',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#b22222',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 50,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 12,
        borderColor: '#b22222',
        borderWidth: 1,
    },
    searchInput: {  // New style for the search bar
        flex: 1,
        height: 50,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginRight: 10,
        borderColor: '#b22222',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#b22222',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    cancelButton: {
        backgroundColor: '#808080',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    contact: {
        backgroundColor: '#fff5f5',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderColor: '#b22222',
        borderWidth: 1,
    },
    contactName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#b22222',
        marginBottom: 5,
    },
    contactDetail: {
        fontSize: 14,
        color: '#555',
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    editButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 5,
        backgroundColor: '#b22222',
        marginRight: 10,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    deleteButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 5,
        backgroundColor: '#ff4d4d',
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    logoutButton: {
        backgroundColor: '#ff4d4d', // A distinct color for the logout button
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        position: 'absolute', // Use absolute positioning
        right: 20, // Position from the right
        top: 40, // Position from the top
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default styles;
