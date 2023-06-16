
class SvelteMBR {

    constructor(params, request) {
        this.params = params
        this.request = request
        this.resp = {}
    }
    route(slug, callBackFunc) {
        if (this.params.slug == slug) {
            let req = this.request
            let res = {
                send(text) {
                    this.resp = text
                }
            }
            callBackFunc(req, res)
            this.resp
        }
    }
}
export function GET({ params, request }) {
    let mbr = new SvelteMBR(params, request)
    mbr.route("alove", (req, res) => {
        console.log(req.url)
        res.send({ msg: "Hello World" })
    })
    console.log(mbr.resp)
    return new Response(JSON.stringify(mbr.resp))
}