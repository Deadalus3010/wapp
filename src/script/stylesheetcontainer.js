import { StyleSheet } from 'react-native';
import NumberFormat from "react-number-format";

//Kommentar
/*Das ist die Konfiguration für den Hintergrund aller App Seiten */
export const stylescreen = StyleSheet.create({
    all_background: {
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'black',
    },
})

/*Hier wird das Aussehen ALLER "Zurück" Knöpfe (Optik Backhandler) definiert*/
export const styleBackButton = StyleSheet.create({
    optic: {
        lineHeight: 15,
        borderColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'black',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'yellow',
        justifyContent: 'center'
    },
    position: {
        paddingVertical: 10,
        paddingLeft: 5,
    },
    buttonSize: {
        width: '30%'
    },
    text: {
        color: 'yellow'
    }
})

/*Von hier aus wird der aktuelle Versionsstand und die Urheber unten angezeigt*/
export const Version = "Alpha 1.2 (NewsFees))";

/*Optik der Versionsview, wichtig für die Anordnung*/
export const styleVersion = StyleSheet.create({
    info: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        textAlign: 'center',
    },
})

/*Optik der Fehlermeldung die aufgrund von Internetmangel entsteht*/
export const styleError = StyleSheet.create({
    loader: {
        flex: 0,
        height: 850,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    }  
})