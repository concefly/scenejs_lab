/**
 * Created by hwj on 2016/1/2.
 */

// Point SceneJS to the bundled plugins
SceneJS.setConfigs({
    pluginPath:"../lib/scenejs/plugins"
});

// Create scene
SceneJS.createScene({
    nodes:[

        // Mouse-quaternion-orbited camera using
        // implemented by plugin at http://scenejs.org/api/latest/plugins/node/cameras/trackball.js
        {
            type: "cameras/trackball",
            eye: { x: 4, y: 4, z: -4.0 },

            nodes:[
                {
                    type:"material",
                    color:{ r:0.6, g:0.6, b:0.9 },
                    nodes:[

                        // Box primitive, implemented by plugin at
                        // http://scenejs.org/api/latest/plugins/node/geometry/box.js
                        {
                            type:"geometry/box",
                            xSize: 1,
                            ySize: 1,
                            zSize: 1.2
                        }
                    ]
                }
            ]
        }
    ]
});