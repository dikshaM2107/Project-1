import React, {useState} from 'react';
import "./Css/ContactForm.css";
import ContactList from './ContactList';
import ShowModal from './ShowModal';

function ContactForm()
{
    
    const [user, setUser] = useState("");
    const [age, setAge] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit =(e)=>{
       
        e.preventDefault();
        const data = {user,age};

        if(user === "" || age === "")   
        {
            // Doubt 
            if(user === "" &&  age ==="")       //if both fields are empty
                <ShowModal text = {"Enter Your Details"}/>

            else if(user ==="")                 //if user field is empty
                alert("Please add UserName");
                
            else if(age === "")      //if age field is empty
                alert("Please enter age")

            setUser("");
            setAge("");
            
        }

        else
        {
            setList((ls)=>[...ls, data]);
            setUser("");
            setAge("");
        }
    }


    return(
        <>
            <div className='wrapper'>
                <div className='content'>
                    <form className='form' onSubmit={handleSubmit}>

                        <div className='field flex'>
                            <label>Username</label>
                            <input type="text" name= 'name' placeholder='Enter Username' value={user} onChange={(e)=>setUser(e.target.value)}></input>
                        </div>

                        <div className='field flex'>
                            <label>Age</label>
                            <input type="number" name= 'Age' placeholder='Enter Your Age' value={age} onChange={(e)=>setAge(e.target.value)} ></input>
                        </div>

                        <button className='btn'>Add</button>

                    </form>
                </div>
    

                <div className='list content'>
                {
                    list.map((items)=>
                        <ContactList user = {items.user} age ={items.age}/>
                    )
                }
                </div>


            </div>

        </>
    );
}
export default ContactForm;