import { createNativeStackNavigator,NativeStackView } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Lista from './src/views/Lista';
import NoweZadanie from './src/views/NoweZadanie';
import Logowanie from "./src/views/Logowanie";
import Rejestracja from "./src/views/Rejestracja";

const stackNav = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <stackNav.Navigator>

        <stackNav.Screen name="Logowanie" component={Logowanie}/>
        <stackNav.Screen name="Rejestracja" component={Rejestracja}/>
        <stackNav.Screen name="Lista" component={Lista}/>
        <stackNav.Screen name="Nowe zadanie" component={NoweZadanie}/>
     
    </stackNav.Navigator>
    </NavigationContainer>
  );
}