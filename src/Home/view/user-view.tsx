import React from "react"
import { ViewProps, ViewState } from "../types/types";




 export default class UserView extends React.Component<ViewProps, ViewState>{
        render(){

            const{
                name,
                email,
                message,
                handleChange,
                handleSubmit,
                formSent
            }= this.props;
             
      
            return(
                <div className="formulario">
                        <div >
                        <form onSubmit={handleSubmit}>
                            
                            <label>Name</label>
                            <input placeholder='Name' value={name}
                            name="name"
                            onChange={handleChange}
                            />

                            <label>Message</label>
                            <input placeholder='Message' value={message}
                            name= "message"
                            onChange={handleChange}
                            />
                           
                            <label>Email</label>
                            <input placeholder='Email' value={email}
                            name= "email"
                            onChange={handleChange}
                               />
                                <input type = 'submit'value = 'Enviar'/>
                                <span>{formSent?'Formulario enviado com sucesso!':''} </span>
                       </form>
                           
                        </div>

                        <div className="drops">
                            <div className="drop drop-1"></div>
                            <div className="drop drop-2"></div>
                            <div className="drop drop-3"></div>
                            <div className="drop drop-4"></div>
                            <div className="drop drop-5"></div>
                        </div>
                </div>
            )
               
        }  
 }
 