import React, { Component } from 'react';
import './style.css'

class Connexion extends Component {
    render() {
        return (
            <div className="container " >    	    
	    	    <h3>Veuillez vous connecter pour accéder à cette section du site, ou bien créer un compte </h3>
	    	    <form >
                    <fieldset className="fieldset-connexion">
                        <legend className="legend-connexion">Connexion</legend>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>          
                    </fieldset>
                </form>                
	        </div>
        );
    }
}

export default Connexion;
