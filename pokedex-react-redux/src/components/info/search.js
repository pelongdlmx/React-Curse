import React, { Component } from "react";
import {alertName} from './index';

const SearchInput = props => {
    return(
        <div className="container">
            <div className="row justify-content-center pt pb">
                <div className="col-12 col-md-10 col-lg-8">
                    <form className="card card-sm">
                        <div className="card-body row no-gutters align-items-center">
                            <div className="col">
                                <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search your Favorite Pokemon!"></input>
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-lg btn-success" type="submit"  >Search</button>
                            </div>
                        </div>
                    </form>
                </div>    
            </div>
        </div>
    )
}

export default SearchInput; 