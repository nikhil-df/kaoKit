import { Tabs } from "expo-router";
import { HeaderShownContext } from "expo-router/build/react-navigation";

export default function TabsLayout (){
    return(
        <Tabs>
            <Tabs.Screen 
            name="index"
            options={{
                headerShown : false
            }}
            />
            <Tabs.Screen
            name="makeMoji"
            options={{
                headerShown:false
            }}
            />
            <Tabs.Screen
            name="profile"
            options={{
                headerShown:false
            }}
            />
        </Tabs>
    )
}