/* Loads in prebuilt scenes and adds them to scenes json */
scenes['default']['crosshair'] = crosshair['scenes']['crosshair']
scenes['default']['FS_Texture'] = FS_Texture['scenes']['FS_Texture']
scenes['default']['red'] = red['scenes']['default']
scenes['default']['green'] = green['scenes']['default']
scenes['default']['blue'] = blue['scenes']['default']
scenes['default']['black'] = black['scenes']['default']
scenes['default']['Distortion_9x9'] = Distortion_9x9['scenes']['Distortion 9x9']
scenes['default']['checkerboard_w'] = checkerboard_w['scenes']['checkerboard_w']
scenes['default']['checkerboard_b'] = checkerboard_b['scenes']['checkerboard_b']
scenes['default']['MTF_Center'] = MTF_Center['scenes']['MTF Center']
scenes['default']['MTF_3x3'] = MTF_3x3['scenes']['MTF 3x3']

/*import bullseye from './patterns/bullseye.JSON' assert { type: "json" };
scenes['default']['bullseye'] = bullseye['scenes']['bullseye']*/

/*import ring_package from './patterns/pattern_package_ring_w5_10_20.JSON' assert { type: "json" };
scenes['default']['ring_w5'] = ring_package['scenes']['ring_w5']
scenes['default']['ring_w10'] = ring_package['scenes']['ring_w10']
scenes['default']['ring_w20'] = ring_package['scenes']['ring_w20']*/




// Meta quest specific
scenes['Quest2']['crosshair'] = crosshair['scenes']['crosshair']
scenes['Quest2']['FS_Texture'] = FS_Texture['scenes']['FS_Texture']
scenes['Quest2']['red'] = red['scenes']['default']
scenes['Quest2']['green'] = green['scenes']['default']
scenes['Quest2']['blue'] = blue['scenes']['default']
scenes['Quest2']['grille'] = grille['scenes']['default']
scenes['Quest2']['black'] = black['scenes']['default']
scenes['Quest2']['Distortion_9x9'] = Distortion_9x9['scenes']['Distortion 9x9']
scenes['Quest2']['checkerboard_w'] = checkerboard_w['scenes']['checkerboard_w']
scenes['Quest2']['checkerboard_b'] = checkerboard_b['scenes']['checkerboard_b']
scenes['Quest2']['MTF_Center'] = MTF_Center['scenes']['MTF Center']
scenes['Quest2']['MTF_3x3'] = MTF_3x3['scenes']['MTF 3x3']



console.log('Scenes')
console.log(scenes)
/*let arr = Object.keys(scenes)
    let len = arr.length
    let i = 0;
    let len2 = texture.options.length;
    let currTextures = [];
    while(i < len2){
        currTextures.push(texture.options[i].text)
        i++;
    }
    i = 0;
    let uploadedTextures = []
    while(i < ring_package['textures']['textureValues'].length){
        uploadedTextures.push(ring_package['textures']['textureValues'][i].text)
        i++;
    }
    let newTextures = [...new Set([...uploadedTextures,...currTextures])]
    newTextures.forEach(text => {
        var option = document.createElement("option"); 
        if(uploadedTextures.indexOf(text) != -1 && currTextures.indexOf(text) == -1){
            option.text = ring_package['textures']['textureValues'][uploadedTextures.indexOf(text)].text
            option.value = ring_package['textures']['textureValues'][uploadedTextures.indexOf(text)].val
            texture.add(option);
        }});

    // combines uploaded textures in uploaded file and current file
    let newUploadedTextureFormat = [...new Set([...Object.keys(uploadedTextureFormat),...Object.keys(ring_package['textures']['uploadedTextureFormats'])])]
    let tmp = {}
    newUploadedTextureFormat.forEach(texture => {
        if(Object.keys(uploadedTextureFormat).indexOf(texture) != -1){
            tmp[texture] = uploadedTextureFormat[texture]
        } else {
            tmp[texture] = ring_package['textures']['uploadedTextureFormats'][texture]
        }
    });
    uploadedTextureFormat = tmp*/
        
