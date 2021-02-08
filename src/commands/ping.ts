import { Message } from "discord.js"
import { command, commandParametres } from "../types/command"

export default class ping implements command {
    public readonly name: string = "ping"
    public readonly description: string = 'useless'

    async on({msg}: commandParametres){
        msg.channel.send('pong')
    }
}