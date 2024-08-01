import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

import { sharingAtom } from "@/atoms/sharing";
import * as Location from "expo-location";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Button, XStack } from "tamagui";

export default function Tab() {
    const [sharing, setSharing] = useAtom(sharingAtom);
    const [map, setMap] = useState<MapView | null>(null);

    useEffect(() => {
        Location.requestForegroundPermissionsAsync().then((status) => {
            console.log(status);
            Location.getCurrentPositionAsync().then((location) => {
                map?.animateToRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                });
            });
        });
    });

    return (
        <View>
            <MapView
                ref={(m) => setMap(m)}
                style={styles.map}
                showsUserLocation
            />
            <XStack style={styles.buttonContainer}>
                <Button onPress={() => setSharing(!sharing)}>
                    {sharing ? "Stop Sharing" : "Start Sharing"}
                </Button>
            </XStack>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});
