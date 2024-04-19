const app = require("./app.js")

app.listen(app.get(), () => {
    console.log(`Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${app.get('port')}`)
})