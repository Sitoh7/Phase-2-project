

function NavBar(){
    return(<>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
  </div>
  </div>
  </div>
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link"  href="#">Cart</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">Account</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>)
}

export default NavBar