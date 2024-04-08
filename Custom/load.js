/* Loads in prebuilt scenes and adds them to scenes json */
import crosshair from './patterns/crosshair.JSON' with { type: "json" };
scenes['default']['crosshair'] = crosshair['scenes']['crosshair']

import FS_Texture from './patterns/FS_Texture.JSON' assert { type: "json" };
scenes['default']['FS White'] = FS_Texture['scenes']['FS_Texture'];

import red from './patterns/red.JSON' assert { type: "json" };
scenes['default']['FS Red'] = red['scenes']['default'];

import green from './patterns/green.JSON' assert { type: "json" };
scenes['default']['FS Green'] = green['scenes']['default'];

import blue from './patterns/blue.JSON' assert { type: "json" };
scenes['default']['FS Blue'] = blue['scenes']['default'];

import black from './patterns/black.JSON' assert { type: "json" };
scenes['default']['FS Black'] = black['scenes']['default'];

import Distortion_9x9 from './patterns/Distortion_9x9.JSON' assert { type: "json" };
scenes['default']['Distortion 9x9'] = Distortion_9x9['scenes']['Distortion_9x9'];

import checkerboard_w from './patterns/checkerboard_w.JSON' assert { type: "json" };
scenes['default']['checkerboard_w'] = checkerboard_w['scenes']['checkerboard_w'];

import checkerboard_b from './patterns/checkerboard_b.JSON' assert { type: "json" };
scenes['default']['checkerboard_b'] = checkerboard_b['scenes']['checkerboard_b'];

import MTF_Center from './patterns/MTF_Center.JSON' assert { type: "json" };
scenes['default']['MTF Center'] = MTF_Center['scenes']['MTF Center'];

import MTF_3x3 from './patterns/MTF_3x3.JSON' assert { type: "json" };
scenes['default']['MTF 3x3'] = MTF_3x3['scenes']['MTF 3x3'];




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
        
