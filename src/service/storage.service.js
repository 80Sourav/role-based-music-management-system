const imageKit =require("@imagekit/nodejs")

 
const imageKitClient = new imageKit({
    privateKey:process.env.IMAGEKIT_KEY    
})

async function uploadFile(file){
    const result = await imageKitClient.files.upload({
        file,
        fileName: "music"+ Date.now() 
    })
    return result
}


module.exports={uploadFile}