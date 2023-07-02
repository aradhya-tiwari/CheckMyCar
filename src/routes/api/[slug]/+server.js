import { Article } from "../../../lib/models/model"
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
export  function GET({ params, request }) {
    let mbr = new SvelteMBR(params, request)
    mbr.route("alove", async (req, res) => {
        let resa = new Article({
            markdown:'# hello \n  > Hey    yo\n ',
            title:"test",
            slug:"testi",
            description:"A bigggggg Discription ",
            image:"Sample Image"
        })
        await resa.save()
        res.send("Done")
    })
    console.log(mbr.resp)
    return new Response(JSON.stringify(mbr.resp))
}