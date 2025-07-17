import 'lazysizes';

import './index.scss';

import '../../partials/multiple-swiper-galleries/multiple-swiper-galleries';
import '../../partials/sidebar-navigation/sidebar-navigation';

/*
import cover from "/src/assets/sd-images/ComfyUI_00074_.png"; // importing img file

import fs from 'fs';
const imageMetadata = require('../index');
const JPGMetadata = imageMetadata.JPGMetadata;
const PNGMetadata = imageMetadata.PNGMetadata;
const GIFMetadata = imageMetadata.GIFMetadata;

// function to encode file data to base64 encoded string
const base64_encode = (file) => {
    console.log('file: ', file)
    // read binary data
    // let bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer.from(file).toString('base64');
};

// function to create file from base64 encoded string
const base64_decode = (base64str, file) => {
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    let bitmap = new Buffer(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('File created from base64 encoded string.');
};

let dataUri, pmd, jmd, gmd;

dataUri = base64_encode(cover);
console.log('dataUri: ', dataUri)
pmd = new PNGMetadata(dataUri, 'dataURI');
console.log('File Structure:', pmd.getStructure().filter((x) => x.index < 5));
// console.log(pmd.getChunks());
console.log('Metadata:', pmd.getMetadata());


const obj2dataURI = (obj) => {
    return ('data:application/json;base64,' + new Buffer.from(JSON.stringify(obj)).toString('base64'));
};

console.log(obj2dataURI(structure));


const fs = require('fs');
const { PNG } = require('pngjs');

function extractMetadata(imagePath) {
  const metadata = {};

  fs.createReadStream(imagePath)
    .pipe(new PNG())
    .on('metadata', (metadataInfo) => {
      console.log('metadataInfo: ', metadataInfo)
      // metadataInfo enthält die PNG-spezifischen Metadaten
      metadata.width = metadataInfo.width;
      metadata.height = metadataInfo.height;
      metadata.colorType = metadataInfo.colorType;
      metadata.bitDepth = metadataInfo.bitDepth;
    })
    .on('end', () => {
      // Wandelt die extrahierten Metadaten in ein JSON-Format um
      const jsonMetadata = JSON.stringify(metadata, null, 2);
      console.log(jsonMetadata);
    });
}

// Beispiel: PNG-Metadaten extrahieren
extractMetadata('./src/assets/sd-images/ComfyUI_00074_.png');
*/