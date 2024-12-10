import {HttpResponse} from "msw"
import {readFileSync} from "node:fs"

const buffer = readFileSync("./file.txt")

HttpResponse.arrayBuffer(buffer)