import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }

  const handleClear = ()=>{
    let newText="";
    setText(newText);
    props.showAlert("Cleared Text ","success");
  }

  const handleDownClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }

  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
  
  const EmailExtracter =()=>{
    let words=text.split(" ");
    let mail="";
    for(let i=0;i<words.length;i++)
    {
      if(words[i].indexOf("@gmail.com")!==-1)
      mail=mail+" "+words[i];
      setemail(mail);
    }
    props.showAlert("Emails Extracted","success");
  }
  const Firstcap=()=>{
    let words=text.split(" ");
    let newText="";
    for(let i=0;i<words.length;i++)
    {
      newText=newText+" "+words[i].charAt(0).toUpperCase()+words[i].substring(1,words[i].length);
    }
    setText(newText.trim());
    props.showAlert("First letter of words are Capitilized","success");
  }

  const [email,setemail]=useState(" ");
  const [text,setText] =useState('Enter the text here');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">

<textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleDownClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleClear}>Clear Text</button>
<button className='btn btn-primary mx-2' onClick={EmailExtracter}>Extract Email Addresses</button>
<button className='btn btn-primary mx-2' onClick={Firstcap}>First Letter Capital</button>
</div>
<div className='container'>
<p>Number of words {text.split(" ").length}</p>
<p>Number of characters {text.length}</p>
<p>Email addresses in Text {email}</p>
<p>Average reading time {0.008*text.split(" ").length} minutes</p>
<h3>Preview</h3>
<p>{text}</p>
</div>
</>
  )
}
