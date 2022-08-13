import Background from '../background/sanstitre.png';
import { Link,useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useUserAuth } from '../Context/UserAuthContext';
import { Alert } from 'react-bootstrap';

export function SignUp() {
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email , password) ;
            navigate("/login");
        } catch (error : any) {
            setError(error.message)
        }
    }

    const {signUp} = useUserAuth();
    return (
        <>
        <section className="text-center" style={{backgroundColor : "#051C24"}}>
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
                  <p>Don't have an account :</p>
                  <h3>Sign Up </h3>
                  {error && <Alert variant='danger'>{error}</Alert>}
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" 
                       name="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>
        
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" 
                      name="password" 
                      className="form-control" placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example4"> Password</label>
                    </div>
        
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" 
                      style={{backgroundColor : " #ecb322"}}
                      id="form2Example33" checked />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div>
        
                    <button type="submit" className="btn btn-dark btn-block mb-4 text-color-light">
                      Sign up
                    </button>
        
                    <div className="text-center">
                    <p>Already have an account ? <Link to="/login">Login</Link> </p>
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
                      <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
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