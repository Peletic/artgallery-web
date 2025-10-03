const { exec } = require('child_process');
const fs = require('fs')
const admZip = require("adm-zip")

async function index() {
    //await exec("npm run package")
    if (!fs.existsSync("dist")) fs.mkdirSync("dist")
    fs.copyFileSync("server/dist/art-gallery-server", "dist/art-gallery-server")

    //await exec("npm run build")
    moveDir("web/out", "dist/web")

    const zip = new admZip()
    zip.addLocalFolder("dist")
    zip.writeZip("distr.zip", (cb) => {})

}

function moveDir(dir, target) {
    fs.mkdirSync(dir, {recursive: true})
    fs.renameSync(dir, target)
}

index()