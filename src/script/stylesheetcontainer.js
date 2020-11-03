import { StyleSheet } from 'react-native';

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
    position:{
        paddingVertical:10,
        paddingLeft:5,
    },
    buttonSize:{
        width:'30%'
    },
    text:{
        color:'yellow'
    }
})

/*Von hier aus wird der aktuelle Versionsstand und die Urheber unten angezeigt*/
export const Version = "Alpha 2.1 (Nicolas Krieg u. Lucas Oehler)";

/*Optik der Versionsview, wichtig für die Anordnung*/
export const styleVersion = StyleSheet.create({
    info: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        textAlign: 'center',
      },
})