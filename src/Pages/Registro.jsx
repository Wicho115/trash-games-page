import React from "react";
import SectionTitle from "../components/SectionTitle";
import Divider1 from "../components/Divider1";
import FormSectionTitle from "../components/FormSectionTitle";

const Registro = (props) => {
    return (
        <>
            <center>
                <div className="SecondaryContainer">
                    <SectionTitle title="Crear una cuenta" />

                    <center>
                        <div className="FormArea">
                            <form>
                                <FormSectionTitle title="Datos Generales" />
                                <div className="FormSection">
                                    <div className="form-row">
                                        <div className="col-5">
                                            <label className="FormInputLabel">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                </div>
                                                <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                                            </div>
                                            <small id="passwordHelpBlock" className="FormInputSmall">
                                                Los demás verán este usuario
                                            </small>
                                        </div>
                                        <div className="col">
                                            <label className="FormInputLabel">Email</label>
                                            <input type="text" className="form-control" id="validationCustom01" placeholder="Email" required />
                                            <small id="passwordHelpBlock" className="FormInputSmall">
                                                Este es tu email
                                            </small>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-6 mb-3">
                                            <label className="FormInputLabel">Password</label>
                                            <input type="text" className="form-control" id="validationCustom02" placeholder="Password" required />
                                            <small id="passwordHelpBlock" className="FormInputSmall">
                                                La contraseña debe tener ciertos caracteres
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                {/*<Divider1 />

                                <FormSectionTitle title="Redes Sociales" />
                                <div className="FormSection">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label className="FormInputLabel">Itch.io</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-shop-window" /></span>
                                                </div>
                                                <input type="text" className="form-control" id="validationCustomUsername" placeholder="@Username" aria-describedby="inputGroupPrepend" required />
                                            </div>
                                            <small id="passwordHelpBlock" className="FormInputSmall">
                                                Opcional. Este dato será público
                                            </small>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="FormInputLabel">Twitter</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-twitter" /></span>
                                                </div>
                                                <input type="text" className="form-control" id="validationCustomUsername" placeholder="@Username" aria-describedby="inputGroupPrepend" required />
                                            </div>
                                            <small id="passwordHelpBlock" className="FormInputSmall">
                                                Opcional. Este dato será público
                                            </small>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label className="FormInputLabel">Discord</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-discord" /></span>
                                                </div>
                                                <input type="text" className="form-control" id="validationCustomUsername" placeholder="@Username" aria-describedby="inputGroupPrepend" required />
                                            </div>
                                            <small id="passwordHelpBlock" className="FormInputSmall">
                                                Opcional. Este dato será público
                                            </small>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="FormInputLabel">Instagram</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-instagram" /></span>
                                                </div>
                                                <input type="text" className="form-control" id="validationCustomUsername" placeholder="@Username" aria-describedby="inputGroupPrepend" required />
                                            </div>
                                            <small id="passwordHelpBlock" className="FormInputSmall">
                                                Opcional. Este dato será público
                                            </small>
                                        </div>
                                    </div>
                                </div>*/}

                                <div className="form-group">
                                    <button type="button" className="btn FormButton">Crear Cuenta</button>
                                </div>

                            </form>
                        </div>
                        <Divider1 />
                    </center>

                </div>
            </center>

        </>
    );
}

export default Registro;