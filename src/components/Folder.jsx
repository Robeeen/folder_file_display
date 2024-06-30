import { useState } from "react";

function Folder({explorer}){

    const [expand, setExpand] = useState(false);
   
    if(explorer.isFolder){
        return (
            <>
              <div style={{color: explorer.isFolder ? 'green' : ''}}>            
                <span onClick={() => {setExpand(!expand)}}>{explorer.name}</span><br />
              </div>
              <div style={{ display: expand ? 'block' : 'none', paddingLeft: 15}}>
                {explorer.items.map((exp) => {
                    return <Folder explorer={exp}/>
                })}
              </div>            
            </>
      )}else{
        return <div>{explorer.name}</div>
      }
}
export default Folder;