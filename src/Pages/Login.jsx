import React from "react";
import SectionTitle from "../components/SectionTitle";
import Divider1 from "../components/Divider1";

const Login = (props) => {
    return (
        <>
            <center><div className="SecondaryContainer">
                <SectionTitle title="Iniciar sesión" />
                <center>
                    <div className="FormArea">
                        <form>
                            <div className="FormSection">
                                <div className="form-group">
                                    <div className="col-7">
                                        <label className="FormInputLabel">Username</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                            </div>
                                            <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-7">
                                        <label className="FormInputLabel">Password</label>
                                        <input type="text" className="form-control" id="validationCustom02" placeholder="Password" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn FormButton">Inicia Sesión</button>
                            </div>
                        </form>
                    </div>
                </center>
            </div></center>

        </>
    );
}

export default Login;