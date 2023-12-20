function Banner(){
    return(
        <div>
              <section class="header-section">
		      <div class="container-navber">
			    <div class="nav-section">
		      <a href="#" class="logo">GP</a>
			  <input type="checkbox" id="toggle"/>
               <label for="toggle"><i class="fa fa-bars" aria-hidden="true"></i></label>
              <nav class="navbar">
			    <ul>
				   <li><a href="#">Home</a></li>
				   <li><a href="#about-section">About</a></li>
				   <li><a href="#services-section">Services</a></li>
				   <li><a href="#portfolio-section">Portfolio</a></li>
				   <li><a href="#">Drop Down<i class="fa fa-chevron-down" aria-hidden="true"></i></a>
				        <ul>
						    <li><a href="#">Drop Down1</a></li>
							<li><a href="#">Drop Down2 <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
							     <ul>
								    <li><a href="#">Drop Down1</a></li>
									<li><a href="#">Drop Down2</a></li>
									<li><a href="#">Drop Down3</a></li>
									<li><a href="#">Drop Down4</a></li>
									<li><a href="#">Drop Down5</a></li>
									
								 </ul>
							</li>
							<li><a href="#">Drop Down3</a></li>
							<li><a href="#">Drop Down4</a></li>
							<li><a href="#">Drop Down5</a></li>
						</ul>
				   </li>

				   <li><a href="#contactt-section">Contact</a></li>
				</ul>
			  </nav>		  
			</div>   
		 
				 <div class="header-row2">
				     <h1>Powerful Digital <br/>Solutions With Gp.</h1>
					 <p>We are team of talented digital marketers</p>


				 </div>
				 <div class="header-row3">
				     <div class="header-colomuns">
					     <i class="fa fa-folder-open-o" aria-hidden="true"></i>
						 <p>Lorem Ipsum</p>

					 </div>
					 <div class="header-colomuns">
					     <i class="fa fa-plus-square-o" aria-hidden="true"></i>

						 <p>Dolor Sitema</p>

					 </div>
					 <div class="header-colomuns">
					     <i class="fa fa-window-restore" aria-hidden="true"></i>
						 <p>Sedare Perspiciatis</p>

					 </div>
					 <div class="header-colomuns">
					     <i class="fa fa-minus-square-o" aria-hidden="true"></i>
						 <p>Magni Dolores</p>

					 </div>
				 </div>
			 </div>
		 
		   </section>
        </div>
    )
}
export default Banner