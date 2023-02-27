import React from 'react'

export default function AddUser() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded mt-2 shadow'>
          <h2 className='text-center m-4'>Register User</h2>
          <div className='mb-3'>
            <label htmlFor='Name' className='form-label'>Name</label>
            <input type={"text"} className="form-control" name='name'/>
          </div>
          <div className='mb-3'>
            <label htmlFor='Name' className='form-label'>Username</label>
            <input type={"text"} className="form-control" name='name'/>
          </div>
          <div className='mb-3'>
            <label htmlFor='Name' className='form-label'>Email</label>
            <input type={"text"} className="form-control" name='name'/>
          </div>
          <div className='pb-3 text-center'>
            <button type='submit' className='btn btn-outline-primary m-2'>Submit</button>
            <button type='submit' className='btn btn-outline-danger'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
