const app = require("./app.js")

app.listen(app.get('port'), () => {
    console.log(`Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${app.get('port')}`)
})