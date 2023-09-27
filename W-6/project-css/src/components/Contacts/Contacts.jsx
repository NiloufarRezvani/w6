import './Contacts.css'

function Contacts(prop) {
    const contacts = prop.contacts
      
  
  
    
  
    return (
      <>
      <div className='box1'>
          <h5>
              {contacts.title}
          </h5>
          <ul>
              {contacts.list.map(
                  (item ,index)=>{
                      return(
                      <li  key={index} >
                          <img src={item.imgURL} alt="" />
                          {item.name}
                      </li>)
                  }
              )}
          </ul>
          <button onClick={prop.onClick}>
              View all
          </button>
      </div>
      </>
    )
  }
  
  export default Contacts