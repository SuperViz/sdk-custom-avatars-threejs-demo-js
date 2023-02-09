const DEVELOPER_KEY = "<SUPERVIZ_DEVELOPER_KEY>";

const url = new URL(document.URL);
let userName = url.searchParams.get('user-name');
let roomId = url.searchParams.get('roomId');
let userType = url.searchParams.get('user-type');

// Create an array list of custom avatars to show in avatar selection
let customAvatars = []
for (let i = 1; i <= 9; i++) {
    customAvatars.push({
        model: `https://production.storage.superviz.com/readyplayerme/${i}.glb`,
        thumbnail: `https://production.cdn.superviz.com/static/default-avatars/${i}.png`,
    });
}

export const supervizSdk = await SuperVizSdk.init(DEVELOPER_KEY, {
    group: {
        id: "<GROUP-ID>",
        name: "<GROUP-NAME>"
    },
    participant: {
        id: Date.now().toPrecision(20),
        name: userName ? userName : undefined,
        type: userType,
    },
    roomId: roomId,
    defaultAvatars: true,
    avatars: customAvatars,
    enableFollow: true,
    enableGoTo: true,
    enableGather: true,
    debug: false
  });
