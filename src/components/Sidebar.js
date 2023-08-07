import React from 'react'

function Sidebar() {
  return (
    <div>
    <div class="overlay"></div>
    <div class="container">
      <div class="col-sm-3 col-md-3">
        <nav id="sidebar">
    
                    <div class="sidebar-header">
                        <h3>Bootstrap Sidebar</h3>
                    </div>
    
                    <ul class="list-unstyled components">
                        <p>Dummy Heading</p>
                        <li class="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                            <ul class="collapse list-unstyled" id="homeSubmenu">
                                <li><a href="#">Home 1</a></li>
                                <li class="active"><a href="#">Home 2</a></li>
                                <li><a href="#">Home 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">About</a>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                            <ul class="collapse list-unstyled" id="pageSubmenu">
                                <li><a href="#">Page 1</a></li>
                                <li><a href="#">Page 2</a></li>
                                <li><a href="#">Page 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
    
                    
                </nav>
    
      </div>
      <div class="col-sm-9 col-md-9">
     
    
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
    
                            <div class="navbar-header">
                              <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn active">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
    
                            
                        </div>
                    </nav>
    
      
    
      </div>
    </div>
    </div>
  )
}

export default Sidebar