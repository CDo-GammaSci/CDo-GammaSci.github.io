/* Loads in prebuilt scenes and adds them to scenes json */
scenes['default']['FS_Texture'] = FS_Texture['scenes']['FS_Texture']
scenes['default']['red'] = red['scenes']['default']
scenes['default']['green'] = green['scenes']['default']
scenes['default']['blue'] = blue['scenes']['default']
scenes['default']['black'] = blue['scenes']['default']
scenes['default']['grille'] = grille['scenes']['default']
scenes['default']['line'] = line['scenes']['line']
scenes['default']['checkerboard_w'] = checkerboard_w['scenes']['checkerboard_w']
scenes['default']['checkerboard_b'] = checkerboard_b['scenes']['checkerboard_b']
scenes['default']['dot array'] = dot_array['scenes']['dot array']
scenes['default']['circular dot array'] = circular_dot_array['scenes']['circularDotArray']
scenes['default']['crosshair'] = crosshair['scenes']['crosshair']

/*import bullseye from './patterns/bullseye.JSON' assert { type: "json" };
scenes['default']['bullseye'] = bullseye['scenes']['bullseye']*/

/*import ring_package from './patterns/pattern_package_ring_w5_10_20.JSON' assert { type: "json" };
scenes['default']['ring_w5'] = ring_package['scenes']['ring_w5']
scenes['default']['ring_w10'] = ring_package['scenes']['ring_w10']
scenes['default']['ring_w20'] = ring_package['scenes']['ring_w20']*/

scenes['default']['ring_w1'] = ring_w1['scenes']['ring_w1']
scenes['default']['ring_w2'] = ring_w2['scenes']['ring_w2']
scenes['default']['ring_w5'] = ring_w5['scenes']['ring_w5']
scenes['default']['Flying Spot'] = flying_spot['scenes']['Flying Spot']



// Meta quest specific
scenes['meta_quest']['FS_Texture'] = FS_Texture['scenes']['FS_Texture']
scenes['meta_quest']['red'] = red['scenes']['default']
scenes['meta_quest']['green'] = green['scenes']['default']
scenes['meta_quest']['blue'] = blue['scenes']['default']
scenes['meta_quest']['grille'] = grille['scenes']['default']
scenes['default']['black'] = blue['scenes']['default']
scenes['meta_quest']['line'] = line['scenes']['line']
scenes['meta_quest']['checkerboard_w'] = checkerboard_w['scenes']['checkerboard_w']
scenes['meta_quest']['checkerboard_b'] = checkerboard_b['scenes']['checkerboard_b']
scenes['meta_quest']['dot array'] = dot_array['scenes']['dot array']
scenes['meta_quest']['circular dot array'] = circular_dot_array['scenes']['circularDotArray']
scenes['meta_quest']['crosshair'] = crosshair['scenes']['crosshair']
scenes['meta_quest']['ring_w1'] = ring_w1['scenes']['ring_w1']
scenes['meta_quest']['ring_w2'] = ring_w2['scenes']['ring_w2']
scenes['meta_quest']['ring_w5'] = ring_w5['scenes']['ring_w5']
scenes['meta_quest']['Flying Spot'] = flying_spot['scenes']['Flying Spot']


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
        
