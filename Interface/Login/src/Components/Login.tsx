import "../App.css"
import Background from '../background/sanstitre.png';

export function Login() {
    return(
        <>
<section className="text-center">
  <div className="p-5 bg-image" style={{
        backgroundImage: `url(${Background})`,
        height: "300px"
        }}></div>

  <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.8)",
        backdropFilter: "blur(30px)"
        }}>
    <div className="card-body py-5 px-md-5" style={{border : "1px solid  #ecb322"}}>

      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h2 className="fw-bold mb-5">Welcome Administrator</h2>
          <form>
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" placeholder="Enter your email"/>
              <label className="form-label" htmlFor="form3Example3">Email address</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form3Example4" className="form-control" placeholder="Enter your password"/>
              <label className="form-label" htmlFor="form3Example4">Password</label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" 
              style={{backgroundColor : " #ecb322"}}
              id="form2Example33" checked />
              <label className="form-check-label" htmlFor="form2Example33">
                Subscribe to our newsletter
              </label>
            </div>

            <button type="submit" className="btn btn-warning btn-block mb-4 ">
              Sign up
            </button>

            <div className="text-center">
              <p>or sign up with:</p>
              <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#3b5998" }}
                role="button">
                <i className="fab fa-facebook-f me-2"></i>Facebook
              </a>
              <a className="btn btn-primary btn-lg btn-block" 
              style={{backgroundColor: "white", color: "black",border :"1px solid green",marginLeft:"10px" }}
                role="button">
                <i className="fab fa-google-f me-2"></i>Google
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}