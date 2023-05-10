import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal, ModalBody, Row, Col } from 'reactstrap';
import { ModalHeader } from 'reactstrap';

const Ttestapi = () => {
    const [modal, updatemodal] = useState(false)
    const [filename, setFilename] = useState()
    const [tname, setTname] = useState()
    const [tid, setTid] = useState()
    const [temail, setTemail] = useState()
    const [tpwd, setTpwd] = useState()
    const [tmob, setTmob] = useState()
    const [tjdate, setTjdate] = useState()
    const [tedu, setTedu] = useState()
    const [texp, setTexp] = useState()
    const [tgen, setTgen] = useState()
    const [tacti, setTacti] = useState()
    const [tcour, setTcour] = useState();
  
    let api = 'https://princestudentapi.onrender.com/Teacher//'
    const saveFile = () => {
      let formData = new FormData();
      formData.append("teachername", tname)
      formData.append("employeesid", tid)
      formData.append("teacheremail", temail)
      formData.append("teacherpassword", tpwd)
      formData.append("teachermobile", tmob)
      formData.append("joindate", tjdate)
      formData.append("education", tedu)
      formData.append("workexp", texp)
      formData.append("photo", filename)
      formData.append("gender", tgen)
      formData.append("is_active", tacti)
      formData.append("teachercourse", tcour)
  
  
      let axiosConfig = {
        headers: {
          'Content-Type': 'multpart/form-data'
        }
      }
      
      console.log(formData)
      axios.post(api, formData, axiosConfig).then(
        response => {
          // console.log(response)
          
            alert("Added Successfully");
            updatemodal(false);
          
        } 
      ).catch(error => {
        console.log(error)
      })
  
    }
    useEffect(() => {
      show();
    });
    async function show() {
      var res = await axios.get(
        "https://princestudentapi.onrender.com/Teacher//"
      );
      // updatedata(res.data);
      // console.log(res);
    }
    // function change(e) {
    //   updateproduct({ ...product, [e.target.name]: e.target.value });
    // }
    ;
    const [values, setValues] = useState([]);
    useEffect(() => {
      fetch("https://princestudentapi.onrender.com/Course//")
        .then((data) => data.json())
        .then((val) => setValues(val));
    }, []);
  
  return (
    <>
    <div className="allstuparentdiva">
        <div>
          <Modal size="lg" isOpen={modal} toggle={() => updatemodal(!modal)}>
            <ModalHeader toggle={() => updatemodal(!modal)}></ModalHeader>
            <ModalBody>
              <center>
                <h3>Teacher Ragistration</h3>
              </center>
              <br />
              <form
              >
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="teachername"
                        onChange={e => setTname(e.target.value)}
                        className="form-control"
                        placeholder="EnterName"
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="id">Id No. </label>
                      <input
                        type="number"
                        name="employeesid"
                        onChange={e => setTid(e.target.value)}
                        className="form-control"
                        placeholder="Id Number "
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="email">E-Mail</label>
                      <input
                        type="email"
                        name="teacheremail"
                        onChange={e => setTemail(e.target.value)}
                        className="form-control"
                        placeholder="Email Id"
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="teacherpassword"
                        onChange={e => setTpwd(e.target.value)}
                        className="form-control"
                        placeholder="Enter Password"
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="mobile_no.">Mobile No.</label>
                      <input
                        type="number"
                        name="teachermobile"
                        onChange={e => setTmob(e.target.value)}
                        className="form-control"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="join_date">Join Date</label>
                      <input
                        type="date"
                        name="joindate"
                        onChange={e => setTjdate(e.target.value)}
                        className="form-control"
                        placeholder="Join Date"
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6}>
                    <div>
                      <label htmlFor="education">Education</label>
                      <input
                        type="text"
                        name="education"
                        onChange={e => setTedu(e.target.value)}
                        className="form-control"
                        placeholder="Education"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <label htmlFor="paid_mount">Work Experiance</label>
                      <input
                        type="text"
                        name="workexp"
                        placeholder="Work Experiance"
                        onChange={e => setTexp(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6}>
                    <div>
                      <label htmlFor="Select_Gender">Select Gender</label>
                      <select class="form-control" name="gender" onChange={e => setTgen(e.target.value)} >
                        <option value="O">Other</option>
                        <option value="F">Female</option>
                        <option value="M">Male</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <label htmlFor="Select_Course">Select Course</label>
                      <select
                        onChange={e => setTcour(e.target.value)}
                        name="scourse"
                        className="form-control"

                      >
                        {values.map((optn, i) => (
                          <option key={i} value={optn.url}>
                            {optn.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6}>
                    <div>
                      <input
                        type="checkbox"
                        name="is_active"
                        value="true"
                        onChange={e => setTacti(e.target.value)}
                      />
                      <br />
                      <label htmlFor="IsActive">
                        <span> Is Active</span>
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <input
                      type="file"
                      onChange={e => setFilename(e.target.files[0])}
                    />
                  </Col>
                </Row>
                <br />
                <center>
                  <button className="btn btn-danger " onClick={e=> saveFile(e.preventDefault())}>
                    Submit
                  </button>
                </center>
              </form>
            </ModalBody>
          </Modal>
        </div>
        <button className="btn btn-secondary" onClick={() => updatemodal(true)} >
          <h4 >Add Teacher </h4>
        </button>
      </div>
      <div className="allstuparentdivb">
        <div className="allstuchilddivb">
        </div>
      </div>

    </>
  )
}

export default Ttestapi