import React,{useState} from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";


const App = () => {

  const [data, setdata] = useState({task:""});
  const [holddata, setholddata] = useState([]);
  const [update, setupdate] = useState(false);
const [getupdatedaat, setgetupdatedaat] = useState();
const [updatedmal, setupdatedmal] = useState();

  const inputchange=(event)=>{
    setdata((olddata)=>{
      return{
        ...olddata,[event.target.name]:event.target.value
      }

    })

  }

  const formsubmit=(event)=>{
    event.preventDefault()
const newid={id:uuidv4(),...data}
    setholddata((olddata)=>[...olddata,newid])
    setdata({task:""})
  }

  const deleteitem=(index)=>{
    holddata.splice(index,1)
    setdata({})
  }

  const updateTODO=(id)=>{
    const get =holddata.find((datafind)=> datafind.id===id)
    setgetupdatedaat(get)
    setupdatedmal(get)
    setupdate(true)
  }

  
  const updatechange=(event)=>{

    setgetupdatedaat(event.target.value)

  
  }

  const updatesubmit=()=>{
    setupdatedmal(updatedmal.task=getupdatedaat)
    
    setupdate(false)
  }
  return (
    <>
      <div className="main">
        <div className="todo">

          <div className="adding">

          { update===false ? <form action="" onSubmit={formsubmit}>
              <input type="text" className="inp" id="x" name="task" value={data.task} onChange={inputchange} />
              <button type="submit" className="add">
                Add
              </button>
            </form>:


            getupdatedaat ? <div>
              <input type="text" className="inp" id="x" name="task" value={ getupdatedaat.task} onChange={updatechange} />
              <button type="submit" className="add" onClick={()=>updatesubmit(getupdatedaat.id)}>
                Edit
              </button>
            </div>:" "
            }


          </div>

          <div className="items" id="items">

          {
            holddata.map((x,index)=>{
              return(
  
            <div className="h1" key={x.id}>
              <div>{x.task}</div>
              <div>
              <button className="iconbtn" onClick={()=>updateTODO(x.id)}>
                 <i className="fas fa-edit"></i>
                </button>
                <button className="iconbtn" onClick={()=>deleteitem(index)}>
                  <i className="fa-solid fa-trash icon"></i>
                </button>
                
              </div>
            </div>

            )
            })
          }


          </div>
        </div>
      </div>
    </>
  );
};
export default App;
