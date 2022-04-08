import React, { Component } from 'react'
import {v1 as uuid} from 'uuid'

 export class AddBook extends Component {
    state={
        bookname:"",
        author:""
    }
    handelInputs =(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    saveData=(e)=>{
        e.preventDefault()
        this.props.AddBook({id:uuid() ,bookname:this.state.bookname,author:this.state.author});
        this.setState({bookname:"" , author:""})
    }
  render() {
    return (
        <form className='mt-3' onSubmit={this.saveData}>
            <div className="form-group">
               <h3>Add Book</h3> 
            </div>
            <div className='form-group'>
                <input type="text" name='bookname' className='form-control' placeholder='Book Name..' value={this.state.bookName} onChange={this.handelInputs} required/>
            </div>
            <div className='form-group'>
                <input type="text" name='author' className='form-control' placeholder='Author Name..' value={this.state.authorName} onChange={this.handelInputs} required/>
            </div>
            <div className='form-group mt-2' >
                <input type="submit" className='btn btn-sm btn-primary' value="Add Book"/>
            </div>
        </form>
     
    )
  }
}

export default AddBook