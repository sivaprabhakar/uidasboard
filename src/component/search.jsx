import React from 'react'

function search() {
  return <>
  <form
    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
         <div className="input-group">
         <input type="text" className="form-control small" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>

         <div className="input-group-append">
         
         <i className="fas fa-search fa-sm"></i>
         <i className="fas fa-bell fa-sm"></i>
         
         
         </div>
         </div>
 </form>
  </>
}

export default search