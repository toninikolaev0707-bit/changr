import OBR from "@owlbear-rodeo/sdk";
import { getPluginId } from "./getPluginId";

OBR.onReady(async () => {
    const role = await OBR.player.getRole();

    // Только ГМ получает меню
    if (role !== "GM") return;

    await OBR.contextMenu.create({
        id: getPluginId("menu"),
        icons: [
            {
                icon: "/icon.svg",
                label: "Change Image",
                filter: {
                    every: [{ key: "type", value: "IMAGE" }],
                    permissions: ["UPDATE"]
                }
            }
        ],
        embed: {
            url: "/",
            height: 124,
        }
    });
});
