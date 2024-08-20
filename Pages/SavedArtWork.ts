
import { readFileSync,writeFileSync } from "fs";


export class SavedArtWork {
    private saveName:string;
   // private fileName = "utility/savevalue"


    public getName(){
        const data = readFileSync("file.txt", 'utf8')
        return data.toString();
    }
    public setName(name:string){
        writeFileSync("file.txt", name, {
            flag: "w"
           })
    }

}