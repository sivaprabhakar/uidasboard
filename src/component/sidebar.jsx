import React from 'react'

function sidebar() {
  return <>
   <ul className="navbar-nav bg-light sidebar sidebar-dark accordion" id="accordionSidebar">
    
   <div className="text-bg-warning p-3">
{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content" href="index.html">
    
    <div className="sidebar-brand-text-bs-primary mx-3">Medico Sales</div>
</a>

{/* <!-- Divider --> */}

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active ">
    <a className="nav-link " href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span className="text-primary">Dashboard</span></a>
</li>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-clipboard"></i>
        <span>Lab Test</span>
    </a>
   
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Appointment</span>
    </a>
    
</li>
{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
        aria-expanded="true" aria-controls="collapsePages">
        <i className="fas fa-fw fa-folder"></i>
        <span>Medicine Order</span>
    </a>
   
</li>

{/* <!-- Nav Item - Charts --> */}
<li className="nav-item">
    <a className="nav-link" href="charts.html">
        <i className="fas fa-fw fa-chart-area"></i>
        <span>Message</span></a>
</li>


<li className="nav-item">
    <a className="nav-link" href="tables.html">
        <i className="fas fa-fw fa-table"></i>
        <span>Payment</span></a>
</li>

<li className="nav-item">
    <a className="nav-link" href="tables.html">
        <i className="fas fa-fw  fa-wallet"></i>
        <span>Settings</span></a>
</li>
<li className="nav-item">
    <a className="nav-link" href="tables.html">
        <i className="fas fa-fw  fa-question"></i>
        <span className="help">Help</span></a>
</li>

</div>

</ul>
  </>
}

export default sidebar