import axios from "../utils/axios"

export const getFiles = async(path, lecture_name) => {
    const {ID, id, name, year, semester} = path[0] ;
    
    const response = await axios.get(
        // `/program/${ID}/${year}/${semester}/${name}/EE 387 UNIT 00.pptx`
        '/program/computer/Third Year/First Semester/Classical Control Systems/EE 387 UNIT 00.pptx'
        )
    const book = JSON.stringify(response)
    console.log(response);
    
}