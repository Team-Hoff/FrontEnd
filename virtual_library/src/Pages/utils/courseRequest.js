import axios from "../utils/axios"

export const getFiles = async(path, lecture_name) => {
    const {ID, name, year, semester} = path[0] ;
    
    
        // `/program/${ID}/${year}/${semester}/${name}/EE 387 UNIT 00.pptx`
        
        axios({
            url: `/program/${ID}/${year}/${semester}/${name}/${lecture_name}`, 
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            // create file link in browser's memory
            const href = URL.createObjectURL(response.data);
        
            // create "a" HTML element with href to file & click
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', `${lecture_name}.pptx`); //or any other extension
            document.body.appendChild(link);
            link.click();
        
            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(`/program/${ID}/${year}/${semester}/${name}/EE 387 UNIT 00.pptx`);
        });
    
}