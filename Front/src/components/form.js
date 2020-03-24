import React, { useState, Fragment } from "react"
import { Consumer } from "./layout"

export const Form = ({ id, action }) => {
    const [ form, setForm ] = useState({images:[]})

    return <Consumer>{ ({ONGs=[], put, post, delete:erase}) => <Fragment>
        <div className="field" style={{ marginTop: '3.5rem'}}>
            <label className="label" htmlFor="name">Organization Name</label>
            <div className="control">
                <input 
                    id="name"
                    className="input" 
                    type="text" 
                    defaultValue={ ONGs[id-1] ? ONGs[id-1].name : '' }
                    onChange={({ target }) => setForm({...form, name: target.value})} 
                />
            </div>
        </div>

        <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control">
                <input 
                    id="email"
                    className="input"  // is-danger 
                    type="email" 
                    defaultValue={ ONGs[id-1] ? ONGs[id-1].email : '' }
                    onChange={({ target }) => setForm({...form, email: target.value})} 
                />
            </div>
            <p className="help is-danger is-hidden">This email is invalid</p>
        </div>

        <div className="field">
            <label className="label" htmlFor="phone">Telephone Number</label>
            <div className="control">
                <input 
                    id="phone"
                    className="input" // is-success
                    type="text" 
                    defaultValue={ ONGs[id-1] ? ONGs[id-1].phone : '' }
                    onChange={({ target }) => setForm({...form, phone: target.value})} 
                />
            </div>
            <p className="help is-success is-hidden">Number is valid</p>
        </div>

        <div className="field">
            <label className="label" htmlFor="description">Description</label>
            <div className="control">
                <textarea 
                    id="description"
                    className="textarea" 
                    defaultValue={ ONGs[id-1] ? ONGs[id-1].description : '' }
                    onChange={({ target }) => setForm({...form, description: target.value})} 
                ></textarea>
            </div>
        </div>

        <div className="field" style={{ margin: '3rem'}}>
            <div className="control has-text-centered">
                <button 
                    className={`button ${{post:'is-primary', put:'is-success', delete:'is-danger'}[action]} is-link`} 
                    onClick={() => ({
                        post:() => post(form),
                        put:() => put({...ONGs[id-1], ...form}),
                        delete:() => erase({...ONGs[id-1], ...form})
                    })[action]()} 
                >{{ post: 'Submit', put: 'Save', delete: 'Delete'}[action]} </button>
            </div>
        </div>
    </Fragment> }</Consumer>
}
