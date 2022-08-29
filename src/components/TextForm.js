import React from 'react'

export default function TextForm() {
  return (
    <div>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Textbox</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
