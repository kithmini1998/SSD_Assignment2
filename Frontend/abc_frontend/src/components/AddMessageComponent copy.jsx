import React, {Component} from 'react';
import Header from "./Header";

class AddMessageComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    <br/><br/><br/><br/>
                    <div className="container">
                        <Header></Header>
                        <div className="row">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label"><i className="fa fa-user-o" aria-hidden="true"></i>&nbsp;
                                        Message Info
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <div className="input-group mb-3">
                                        <input type="text" name="title" id="title" placeholder="Enter Title Here" className="form-control"/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="input-group mb-3">
                                        <textarea type="text" name="description" id="description" placeholder="Message Description" className="form-control" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container mb-3">
                        <div className="row">
                            {/*Cancel Button*/}
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                <i className="fa fa-times" aria-hidden="true"></i>&nbsp;
                                Cancel
                            </button>
                        </div>
                        <br/>
                        <div className="row">
                            {/*Add Notice Button*/}
                            <button type="button" className="btn btn-primary"><i className="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;
                                Save
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddMessageComponent;