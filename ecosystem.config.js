module.exports = {
    apps: [
        {
            name: "StarDropApp",
            exec_mode: "cluster",
            instances: "max",
            script: "./.output/server/index.mjs",
        },
    ],
};
