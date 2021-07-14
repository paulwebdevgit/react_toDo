import {useState, useEffect} from 'react'

export default function TextArea({addText, itemId, value}){

    const [textArea, setTextArea] = useState(value || " ");

    useEffect(() => {
       
        addText(textArea, itemId)
      }, [textArea])

    const handleChange = (e) => {
        // const word = textArea.split(' ');
        // console.log(word);
        // const newText =  word.map((element) => {
        // let RegExp = /^(ftp|http|https):\/\/[^ "]+$/.test(element);
        // console.log(RegExp)
        //     if(RegExp){
        //     return element = `<a src="${element}">${element}</a>`
        // }
        // })
        // console.log(newText);
        // const links = newText.join(' ')
        // console.log(links);

        setTextArea(e.target.value);
        
        
    }

   
    return(
        <textarea 
            className="textArea"
            type="textarea" 
            name="textValue"
            value={textArea}
            onChange={handleChange}
        />
    )
}