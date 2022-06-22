import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { RNCamera, FaceDetector,  } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function App() {

  const onSuccess = (e: any) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };
  
  return (
    <View style={styles.container}>
      <Text>Qr Code</Text>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text>
            Go to{' '}
            <Text>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity>
            <Text>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      <StatusBar style="auto" />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Open up App.tsx to start working on your app!</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  footer: {
    paddingLeft: "3rem",
    backgroundColor: "lightblue",
    position: 'absolute', 
    bottom: 0,
    width: "100%" ,
    height: "2.5rem" ,  
  },

  footerText: {
    lineHeight: 40,
  }
});

expo install expo-barcode-scanner