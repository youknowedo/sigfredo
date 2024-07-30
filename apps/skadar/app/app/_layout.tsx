import { Stack } from "expo-router/stack";

import tamaguiConfig from "@/tamagui.config";
import { TamaguiProvider } from "@tamagui/core";
import * as Linking from "expo-linking";
import * as Location from "expo-location";
import { useEffect } from "react";

const askForLocationPermissionAsync = async (s?: boolean) => {
    if (s) {
        alert("Permission to access location was denied");
        Linking.openSettings();

        return;
    }

    const { status } = await Location.requestBackgroundPermissionsAsync();
    if (status !== "granted") {
        askForLocationPermissionAsync(true);
    }
};

export default function Layout() {
    useEffect(() => {
        askForLocationPermissionAsync();
    });

    return (
        <TamaguiProvider config={tamaguiConfig}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </TamaguiProvider>
    );
}
